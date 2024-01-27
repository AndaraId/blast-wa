import { config } from 'dotenv'
config()
import { MongoStore } from 'wwebjs-mongo'
import mongoose, { connect } from 'mongoose'
import * as qrcode from 'qrcode-terminal'

connect(process.env.MONGODB_URI).then(() => {
    const store = new MongoStore({ mongoose: mongoose })
    const client = new Client({
        authStrategy: new RemoteAuth({
            store: store,
            backupSyncIntervalMs: 300000
        })
    })
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true })
    })
    client.on('message', msg => {
        console.log(JSON.stringify(msg))
    })
    client.on('ready', () => {
        console.log('Client is ready!')
    })
    client.initialize()
})