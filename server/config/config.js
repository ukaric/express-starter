const prodEnv = {}
const devConf = {
  dbUrl: 'URL'
}
const defaulEnv = {
  PORT: process.env.PORT || 8080
}

function envConfig(env) {
  switch (env) {
    case 'production':
      return prodEnv
    case 'development':
      return devConf
    default:
      return defaulEnv
  }
}

export default {
  ...defaulEnv,
  ...envConfig(process.env.NODE_ENV)
}
