import config from '../config'
import mongoose from 'mongoose'
import logger from './logger'

let dbURL

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const dbConnection = () => {
  mongoose.set('strictQuery', false)

  if (process.env.NODE_ENV === 'test') {
    dbURL = config.mongo_url_test
  }

  if (process.env.NODE_ENV === 'development') {
    dbURL = config.mongo_url
  }

  if (process.env.NODE_ENV === 'production') {
    dbURL = config.mongo_url
  }

  mongoose.connect(dbURL, opts)

  const db = mongoose.connection
  db.once('open', () => {
    logger.http(`Database connected: ${dbURL}`)
  })

  db.on('error', (error) => {
    logger.error(`connection error: ${error}`)
  })
}

export default dbConnection
