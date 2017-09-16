import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const isProd = process.env.NODE_ENV === 'prod'
const isDev = process.env.NODE_ENV === 'development'

export default app => {
  if (isProd) {
    app.use(compression)
    app.use(helmet)
  }
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  if (isDev) {
    app.use(morgan('dev'))
  }
}
