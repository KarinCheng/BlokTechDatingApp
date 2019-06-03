/* eslint-disable semi */

var express = require('express')
var find = require('array-find')

var data = [
  {
    id: 'pop',
    member: [
      {
        name: 'Jose',
        age: '26',
        city: 'Amsterdam',
        bio: 'I haven’t dated much in recent years because I’ve been so focused on my career. Now I’m ready to meet the person who will pull my head out of the books and bring me a bit of happiness.',
        favMusic: [
          'Imagine Dragons - Whatever it takes',
          '5 Seconds Of Summer - Youngblood',
          'Avicii, Aloe Blacc - SOS'
        ],
        question: 'You should leave a comment if you like Harry Potter and want to discuss it further.'
      }
    ]
  },
  {
    id: 'rock',
    member: [
      {
        name: 'Noah',
        age: '23',
        city: 'Amsterdam',
        bio: 'I am Noah, an avid traveler. Would rather hike in the moutains than surf a couch.',
        favMusic: [
          'Live My Last - Lets get this started again',
          'Red - Hold Me Now',
          'Imagine Dragons - Natural'
        ],
        question: 'If you did not have to sleep, what would you do with the extra time? I would play guitar'
      }
    ]
  },
  {
    id: 'jazz',
    member: [
      {
        name: 'Benjamin',
        age: '22',
        city: 'Roterdam',
        bio: 'IT guy by day. Dancing, concerts, and camping by night',
        favMusic: [
          'Paul Desmonds - Take Five',
          'Bard Howard - Fly Me To The Moon',
          'Billy Streyhorn - The A-Train'
        ],
        question: 'You should leave a comment if you like Harry Potter and want to discuss it further.'
      }
    ]
  },
  {
    id: 'metal',
    member: [
      {
        name: 'Oliver',
        age: '23',
        city: 'Amsterveen',
        bio: 'I live by myself, I pay my own rent, I wear socks that match and I love my mom. I am a confident, attractive & comedic person.',
        favMusic: [
          'I SEE STARS - Portals',
          'Arrows to Athens - Jet Black Heart',
          'Arrows to Athens - Casual'
        ],
        question: 'You should leave a comment if you like Harry Potter and want to discuss it further.'
      }
    ]
  },
  {
    id: 'classical',
    member: [
      {
        name: 'Lucas',
        age: '25',
        city: 'Den Haag',
        bio: 'I am a straight forward guy. I take my career seriously. I wear socks that match. And I probably check my iPhone too much. Maybe you will forgive me for that last one thought?',
        favMusic: [
          'J.S. Bach—Toccata and Fugue in D Minor',
          'Craig Armstrong – Romeo & Juliet Balcony Scene',
          'Verdi – Libiamo Ne’Lieti Calici'
        ],
        question: 'You should leave a comment if you like Harry Potter and want to discuss it further.'
      }
    ]
  },
  {
    id: 'country',
    member: [
      {
        name: 'James',
        age: '26',
        city: 'Utrecht',
        bio: 'Lets say just say I dont spend a lot of time in front of the TV. Im too busy hunting down my next adventure. Next up: kitesurfing. Care to join?',
        favMusic: [
          'Kane Wallen - Good As You',
          'Luce Combs - Beer Never Broke My Heart',
          'Lee Brice - Rumor'
        ],
        question: 'You should leave a comment if you like Harry Potter and want to discuss it further.'
      }
    ]
  }
]

express()
.use(express.static('static'))
  .get('/', filter)
  .get('/:id', match)
  .get('/:id', profile)
  .use(notFound)
  .listen(3000)

//filter page
function filter(req, res) {
  var doc = '<!doctype html>'

  doc += '<title>Filter</title>'
  doc += '<link rel=stylesheet href=/index.css>'
  doc += '<h1>Choose your favorite music genre</h1>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'
  doc += '<p><a href= "/' + profile.id + '">Pop</a></p>'

  res.send(doc)
}

//match page
function match(req, res) {
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

//profile details
function profile(req, res, next) {
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

//404 page
function notFound(req, res) {
  var doc = '<!doctype html>'

  doc += '<title>Not found - Match</title>'
  doc += '<link rel=stylesheet href=/index.css>'
  doc += '<h1>Not found</h1>'
  doc += '<p>Uh oh! We couldn’t find this page!</p>'

  res.status(404).send(doc)
}