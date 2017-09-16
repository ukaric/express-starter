import express from 'express'
const app = express()
import config from './config/config'
import './config/db'
import middlewareConfig from './config/middleware'

middlewareConfig(app)
app.get('/', (req, res) => {
  res.send('Testing if OK ?')
})

app.listen(config.PORT, err => {
  if (err) throw err
  console.log(`Express running on port ${config.PORT}`)
})
