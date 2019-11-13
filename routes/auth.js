const express = require("express")
const app = express()
const User = require("../models/User")
const bcrypt = require("bcrypt")

// app.get('/signup', (req, res) => {
//   res.render('auth/signup')
// })

// app.get('/login', (req, res) => {
//   res.render('auth/login')
// })


app.post("/signup", (req, res) => {

  const { username, password } = req.body
  if (!username || !password) return res.render('auth/signup', { message: "both fileds are required" })

  User.findOne({ username }).then(match => {
    if (match) return res.render('auth/signup', { message: "Username already taken" })
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    User.create({ username, password: hash }).then(newUser => {
      console.log(newUser)
      req.session.currentUser = match
      return res.redirect('/')
    })
  }).catch(err => console.log(err))
});


app.post("/login", (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.render('auth/login', { message: "both fields are required" })

  User.findOne({ username }).then(match => {
    if (!match) return res.render("auth/login", { message: "invalid credentials" })
    if (!bcrypt.compareSync(password, match.password)) return res.render("auth/login", { message: "invalid credentials" })
    req.session.currentUser = match

    res.json(match)

  }).catch(err => console.log(err))
});

app.get('/checklogged', (req, res) => {
  return res.json(req.session.currentUser || null)
})


module.exports = app;