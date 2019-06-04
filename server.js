/* eslint-disable semi */

var express = require('express')
var find = require('array-find')

var data = [
  {
    id: 'pop',
    genre: 'Pop',
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
      },
    ]
  },
  {
    id: 'rock',
    genre: 'Rock',
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
    genre: 'Jazz',
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
    genre: 'Metal',
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
    genre: 'Classical',
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
    genre: 'Country',
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
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', filter)
  .get('/:id', match)
  .get('/:id', profile)
  .use(notFound)
  .listen(3000)

//filter page
function filter(req, res) {
  res.render('filter.ejs', {data: data})
}

//match page
function match(req, res, next) {
  var id = req.params.id
  var match = find(data, function (value) {
    return value.id === id
  })

  if (!match) {
    next()
    return
  }

  res.render('match.ejs', {data: match})
}

//profile page
function profile(req, res, next) {
  var name = req.params.name
  var profile = find(data, function (value) {
    return value.name === name
  })

  if (!profile) {
    next()
    return
  }

  res.render('profile.ejs', {data: profile})
}

//404 page
function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}