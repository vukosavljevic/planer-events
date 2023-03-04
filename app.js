const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');

//init app & middleware

const app = express()
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

//db connection

let db
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000');
        })
        db = getDb();
    }
});


// routes

app.get('/events', (req, res) => {

    const page = req.query.p || 0

    const eventsPerPage = 3

    let events = []

    db.collection('events')
        .find()
        .sort({ author: 1 })
        .skip(page * eventsPerPage)
        .limit(eventsPerPage)
        .forEach(event => events.push(event))
        .then(() => {
            res.status(200).json(events)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})


app.get('/events/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {

        db.collection('events')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({ error: "event was not found, check event ID!", })
            })
    }
    else {
        res.status(500).json({ error: 'Not valid doc id' })
    }
})

app.post('/events', (req, res) => {

    const event = req.body

    db.collection('events')
        .insertOne(event)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create a new document' })
        })

})

app.delete('/events/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {

        db.collection('events')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: "Could not delete documnent" })
            })
    }
    else {
        res.status(500).json({ error: 'Not valid doc id' })
    }
})

app.patch('/events/:id', (req, res) => {
    const updates = req.body
    if (ObjectId.isValid(req.params.id)) {

        db.collection('events')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: "Could not update documnent" })
            })
    }
    else {
        res.status(500).json({ error: 'Not valid doc id' })
    }
})