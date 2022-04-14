import fetchMock from 'jest-fetch-mock'

module.export = () => {
    global.testServer = require('./server/server.js')

    fetchMock.enableMocks

}
