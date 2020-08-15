const routes = require('express').Router()
const axios = require('axios')
const apiKey = '?api_key=' + require('../api')

const apiClient = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

routes.get('/search/multi/:query', (req, res) => {
  const query = req.params.query

  apiClient
    .get(`/search/multi${apiKey}&query=${query}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/search/person/:query', (req, res) => {
  const query = req.params.query

  apiClient
    .get(`/search/person${apiKey}&query=${query}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/search/movie/:query', (req, res) => {
  const query = req.params.query

  apiClient
    .get(`/search/movie${apiKey}&query=${query}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/search/tv/:query', (req, res) => {
  const query = req.params.query

  apiClient
    .get(`/search/tv${apiKey}&query=${query}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/movie/:id', (req, res) => {
  const movieID = req.params.id

  apiClient
    .get(`/movie/${movieID}${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = routes
