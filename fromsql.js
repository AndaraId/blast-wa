const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../examplestore.db')

db.serialize(() => {
    db.each("SELECT * FROM target LIMIT 105", (err, row) => {
        console.log("wa.me/" + row.wa + " atas nama " + row.nama)
    })
})

db.close()