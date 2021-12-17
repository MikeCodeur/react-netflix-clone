require('dotenv').config()
if (process.env.NODE_ENV === 'development') {
  if (process.env.SSR === 'true') {
    module.exports = require('./server-test')
  } else {
    module.exports = require('./server')
  }
} else if (process.env.NODE_ENV === 'test') {
  module.exports = require('./server-test')
} else {
  module.exports = require('./server')
}
