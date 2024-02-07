const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../examplestore.db')

db.serialize(() => {
    db.each("SELECT * FROM sqlite_master WHERE type='table'", (err, row) => {
        if (err) console.log(err)
        else console.log(row)
    })
})

db.close()