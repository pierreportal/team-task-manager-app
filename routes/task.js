const express = require("express")
const app = express()

const Task = require("../models/Task")

app.get('/', (req, res) => {
  Task.find({}).populate('createdBy').then(data => {
    res.json(data)
  }).catch(err => res.json(err))
})

app.post('/create', (req, res) => {
  const { title, description, user } = req.body
  // console.log(title, description, user)
  Task.create({ title, description, position: [0, 0], createdBy: user, done: false }).then(data => {
    res.json(data)
    console.log(data)
  }).catch(err => console.log(err))
});

app.post('/edit/:taskId', (req, res) => {
  //
  const id = req.params.taskId
  const { position } = req.body
  Task.findOneAndUpdate({ _id: id }, { position }, { new: true }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

app.get('/delete/:taskId', (req, res) => {
  const id = req.params.taskId
  Task.findByIdAndDelete(id).then(data => {
    console.log('deleted.')
    res.json(data)
  }).catch(err => console.log(err))
});


module.exports = app