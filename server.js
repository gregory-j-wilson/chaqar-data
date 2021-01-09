const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./auth/authenticate-middleware.js')
const authRouter = require('./auth/auth-router.js')

const server = express()

server.use(helmet())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(express.json())

server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allows-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})


server.use('/api/auth', authRouter)

module.exports = server