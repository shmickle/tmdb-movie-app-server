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
    .get(`/movie/${movieID}${apiKey}&append_to_response=videos,credits,similar`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/movie/:id/videos', (req, res) => {
  const movieID = req.params.id

  apiClient
    .get(`/movie/${movieID}/videos${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/movie/:id/credits', (req, res) => {
  const movieID = req.params.id

  apiClient
    .get(`/movie/${movieID}/credits${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/movie/:id/similar', (req, res) => {
  const movieID = req.params.id

  apiClient
    .get(`/movie/${movieID}/similar${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/movie/:id/recommendations', (req, res) => {
  const movieID = req.params.id

  apiClient
    .get(`/movie/${movieID}/recommendations${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/tv/:id', (req, res) => {
  const tvID = req.params.id

  apiClient
    .get(`/tv/${tvID}${apiKey}&append_to_response=videos,credits,similar`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/tv/:id/videos', (req, res) => {
  const tvID = req.params.id

  apiClient
    .get(`/tv/${tvID}/videos${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/tv/:id/credits', (req, res) => {
  const tvID = req.params.id

  apiClient
    .get(`/tv/${tvID}/credits${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/tv/:id/similar', (req, res) => {
  const tvID = req.params.id

  apiClient
    .get(`/tv/${tvID}/similar${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/tv/:id/recommendations', (req, res) => {
  const tvID = req.params.id

  apiClient
    .get(`/tv/${tvID}/recommendations${apiKey}`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

routes.get('/person/:id', (req, res) => {
  const personID = req.params.id

  apiClient
    .get(`/person/${personID}${apiKey}&append_to_response=combined_credits`)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = routes
