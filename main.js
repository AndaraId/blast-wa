import { config } from 'dotenv'
config()
import { MongoStore } from 'wwebjs-mongo'
import mongoose, { connect } from 'mongoose'

connect(process.env.MONGODB_URI).then(() => {
    const store = new MongoStore({ mongoose: mongoose })
    const client = new Client({
        authStrategy: new RemoteAuth({
            store: store,
            backupSyncIntervalMs: 300000
        })
    })
    client.initialize()
})
console.log(process.env.A)