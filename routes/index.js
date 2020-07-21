'use strict'

const config = require('../config')
const handlers = require('../handlers')

module.exports = [
  {
    method: 'POST',
    path: '/convert/{format}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: parseInt(config.PAYLOAD_MAX_SIZE, 10),
        timeout: parseInt(config.PAYLOAD_TIMEOUT, 10)
      },
      timeout: {
        server: parseInt(config.TIMEOUT_SERVER, 10),
        socket: parseInt(config.TIMEOUT_SOCKET, 10)
      },
      handler: handlers.handleUpload
    }
  },
  {
    method: 'GET',
    path: '/convert/formats',
    config: {
      handler: handlers.showFormats
    }
  },
  {
    method: 'GET',
    path: '/convert/formats/{type}',
    config: {
      handler: handlers.showFormat
    }
  },
  {
    method: 'GET',
    path: '/convert/versions',
    config: {
      handler: handlers.showVersions
    }
  },
  {
    method: 'GET',
    path: '/healthz',
    config: {
      handler: handlers.healthcheck
    }
  }
]
