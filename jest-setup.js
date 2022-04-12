import 'jest-fetch-mock'

module.export = () => {
    global.testServer = require('./server/server.js')
}