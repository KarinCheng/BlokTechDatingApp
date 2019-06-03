/* eslint-disable semi */

var express = require('express')
var find = require('array-find')

var data = [
  {
    id: 'pop',
    name: 'Jose',
    age: '26',
    city: 'Amsterdam',
    bio: 'I haven’t dated much in recent years because I’ve been so focused on my career. Now I’m ready to meet the person who will pull my head out of the books and bring me a bit of happiness.',
    favMusic: 'Imagine Dragons - Whatever it takes',
    question: 'You should leave a comment if you like Harry Potter and want to discuss it furter.'
  },
  {
    id: 'rock',
    name: 'Noah',
    age: '23',
    city: 'Amsterdam',
    bio: 'I am Noah, an avid traveler. Would rather hike in the moutains than surf a couch.',
    favMusic: 'Live My Last - Lets get this started again',
    question: 'If you did not have to sleep, what would you do with the extra time? I would play guitar'
  },
  {
    id: 'jazz',
    name: 'Benjamin',
    age: '22',
    city: 'Roterdam',
    bio: 'IT guy by day. Dancing, concerts, and camping by night',
    favMusic: 'Paul Desmonds - Take Five',
    question: 'You should leave a comment if you like Harry Potter and want to discuss it furter.',
  },
  {
    id: 'metal',
    name: 'Oliver',
    age: '23',
    city: 'Amstelveen',
    bio: 'I live by myself, I pay my own rent, I wear socks that match and I love my mom. I am a confident, attractive & comedic person.',
    favMusic:'I SEE STARS - Portals',
    question: 'You should leave a comment if you like Harry Potter and want to discuss it furter.',
  },
  {
    id: 'classical',
    name: 'Lucas',
    age: '25',
    city: 'Amstelveen',
    bio: 'I am a straight foreward guy. I take my career seriously. I wear socks that match. And I probably check my iPhone too much. Maybe you will forgive me for that last one thought?',
    favMusic: 'J.S. Bach—Toccata and Fugue in D Minor',
    question: 'You should leave a comment if you like Harry Potter and want to discuss it furter.',
  },
  {
    id: 'country',
    name: 'James',
    age: '26',
    city: 'Utrecht',
    bio: 'Lets say just say I dont spend a lot of time in front of the TV. Im too busy hunting down my next adventure. Next up: kitesurfing. Care to join?',
    favMusic: 'Kane Wallen - Good As You',
    question: 'You should leave a comment if you like Harry Potter and want to discuss it furter.',
  }
]

express()
.use(express.static('static'))
  .get('/', profile)
  .get('/:id', filter)
  .use(notFound)
  .listen(3000)

// match page
function profile(req, res) {
  var doc = '<!doctype html>'
  var length = 1
  var index = -1
  var profile

  doc += '<title>Match</title>'
  doc += '<link rel=stylesheet href=/index.css>'
  doc += '<h1>You got a match!</h1>'

  while (++index < length) {
    profile = data[index]
    doc += '<h2>' + profile.name + '</h2>'
    doc += '<p><a href="/' + profile.id + '"> View profile </a></p>'
  }
  res.send(doc)
}

// profile details
function filter(req, res, next) {
  var id = req.params.id
  var doc = '<!doctype html>'
  var profile = find(data, function (value) {
    return value.id === id
  })

  if (!filter) {
    next()
    return
  }

  doc += '<title>' + profile.name + ' - Profile</title>'
  doc += '<link rel=stylesheet href=/index.css>'
  doc += '<h1>' + profile.name + '</h1>'
  doc += '<h2>' + profile.age + '</h2>'
  doc += '<h2>' + profile.city + '</h2>'
  doc += '<p>' + profile.bio + '</p>'
  doc += '<p>' + profile.favMusic + '</p>'
  doc += '<p>' + profile.question + '</p>'

  res.send(doc)
}

// 404 page
function notFound(req, res) {
  var doc = '<!doctype html>'

  doc += '<title>Not found - Match</title>'
  doc += '<link rel=stylesheet href=/index.css>'
  doc += '<h1>Not found</h1>'
  doc += '<p>Uh oh! We couldn’t find this page!</p>'

  res.status(404).send(doc)
}