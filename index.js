const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const cors = require("cors")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || "development"
const routes = require("./routes")

app.set("port", PORT)
app.set("env", NODE_ENV)
app.use(logger("tiny"))
app.use(bodyParser.json())

var corsOptions = {
  origin: "https://mml.ericmbryant.com",
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use("/", routes)

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`)
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message,
    },
  })
})

app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      "port"
    )} | Environment : ${app.get("env")}`
  )
})
