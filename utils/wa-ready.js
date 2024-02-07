const sqlite3 = require('sqlite3').verbose()
const { log } = require('./print')

const readyDone = () => {
    const db = new sqlite3.Database('../examplestore.db')
    db.serialize(() => {
        db.each("SELECT * FROM sqlite_master WHERE type='table'", (err, row) => {
            if (err) log('sqlite_master error', err)
            else log('sqlite_master', JSON.stringify(row, undefined, 2))
        })
        db.each("SELECT * FROM target WHERE sent=0 LIMIT 5", (err, row) => {
            if (err) log('target error', err)
            else log('target', JSON.stringify(row, undefined, 2))
        })
    })
    db.close()
}

module.exports = { readyDone }