var router = require('express').Router()
var bcrypt = require('bcryptjs')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var config = require('../../config')

router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        return res.send(401)
    }
    var auth = jwt.decode(req.headers['x-auth'], config.secret)
    User.findOne({username: auth.username}, function (err, user) {
        if (err) { return next(err) }
        res.json(user)
    })
})

router.post('/', function (req, res, next) {
    if (!req.body.dogname) {
        var user = new User({ username: req.body.username })
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) { 
                return next(err) }
            user.password = hash
            user.save(function (err) {
                if (err) { return next(err) }
                console.log("This is user object", user)
                console.log("This is user object", user.username)
                console.log("This is user object", user.password)
                console.log("This is user object", user.dogname)
                res.send(201)
            })
        })
    }

})

module.exports =router