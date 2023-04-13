const express = require('express')
const apartments = require('./apartments')
const houses = require('./houses')
const cors = require('cors')
const PORT = 3003

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

//get request

app.get('/', (req, res) => {
    res.send("welcome!")
  })

app.get('/apartments', (req, res) => {
    res.json(apartments)
  });

  app.get('/houses', (req, res) => {
    res.json(houses)
  });


    app.get('/apartments/:id', (req, res) => {
        const id = req.params.id
        res.json(apartments[id])
    })
