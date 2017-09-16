import mongoose from 'mongoose'
import config from '../config/config'
mongoose.Promise = global.Promise

try {
  mongoose.connect(config.dbUrl, { useMongoClient: true })
} catch (e) {
  if (e) throw e
  mongoose.createConnection(config.dbUrl)
}

mongoose.connection.once('open', () => console.log('MongoDB running'))
