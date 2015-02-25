var Dog = require('../../models/dog')
var websockets = require('../../websockets')
var router = require('express').Router()
router.get('/', function (req, res, next) {
    Dog.find()
    .exec(function(err, dogs) {
        if (err) { return next(err)
        }
        res.json(dogs)
    })
})

router.post('/', function (req, res, next) {
    var dog = new Dog({
        dogname: req.body.dogname,
        ownername: req.body.ownername
    })
    dog.save(function (err, post) {
        if (err) { return next(err)
        }
        res.json(201, dog)
        websockets.broadcast('new_dog', dog)
    })
})

module.exports = router