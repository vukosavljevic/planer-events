const { MongoCleint, MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/Planer-events')
            .then(client => {
                dbConnection = client.db()
                return cb();
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection 
}