import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import models from './models'
import routes from './routes'

const app = express()

app.get('/', (req, res) => {
  res.send('GET')
})

app.post('/', (req, res) => {
  res.send('POST')
})

app.put('/', (req, res) => {
  res.send('PUT')
})

app.delete('/', (req, res) => {
  res.send('DELETE')
})

app.listen(3000, () => {
  console.log(process.env.ENVIRONMENT)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extedned: true }))
app.use((req, res, next) => {
  req.context = { models }
  next()
})
app.use('/users', routes.user)
app.use('/messages', routes.message)
app.use('/quotes', routes.quote)