const { config } = require('dotenv')
config()
const { MongoStore } = require('wwebjs-mongo')
const mongoose = require('mongoose')
const { Client, RemoteAuth } = require('whatsapp-web.js')
const events = require('./utils/events')

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const store = new MongoStore({ mongoose: mongoose })
    const client = new Client({
        authStrategy: new RemoteAuth({
            store: store,
            backupSyncIntervalMs: 300000
        }),
        puppeteer: {
            args: ['--no-sandbox'],
        }
    })
    client.on('auth_failure', events.authFailure)
    client.on('authenticated', events.authenticated)
    client.on('disconnected', events.disconnected)
    client.on('qr', events.qr)
    client.on('message', events.message)
    client.on('ready', events.ready)
    client.initialize()
})