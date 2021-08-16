const { json } = require('express')
const express = require('express')
const app = express()
const PORT = 3001

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true        
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})
// Return a note by id
app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id)
    if(note) {
        res.json(note)
    }else{
        res.statusMessage = "Note not found";
        res.status(404).end()
    }
})
// Delete a note by id
app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter( note => note.id !== id)
    
    res.status(204).end()

})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})