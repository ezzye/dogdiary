//Create

db.posts.insert({"title":"Second Post", "user": "alice"})


db.posts.save({"title":"Second Post", "user": "alice"})


db.posts.update({
  "user": "alice"
}, {
  "title": "Second Post",
  "user": "alice"
}, {
  upsert: true
})

//post//
var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err) {
        if (err) {
          return next(err);
        } else {
          res.json(user);
        }
  });
};



//Read

db.posts.find()

db.posts.find({})

db.posts.find({ "user": "alice" })

db.posts.find({ "user": { $in: ["alice", "bob"] } })

"http://docs.mongodb.org/manual/reference/operator/query/#query-selectors"

//get//
exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};



    //And

db.posts.find({ "user": "alice", "commentsCount": { $gt: 10 }  })


    //Or

db.posts.find( { $or: [{ "user": "alice" }, { "user": "bob" }] })


exports.read = function(req, res) {
  res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};


// route middleware to validate :name
router.param('name', function(req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next(); 
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.name + '!');
});


//Update

db.posts.update({
  "user": "alice"
}, {
  $set: {
    "title": "Second Post"
  }
}, {
  multi: true
})


db.posts.save({
  "_id": ObjectId("50691737d386d8fadbd6b01d"),
  "title": "Second Post",
  "user": "alice"
})

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });



//Delete

    //all
db.posts.remove()


    //all alice
db.posts.remove({ "user": "alice" })


    //one alice
db.posts.remove({ "user": "alice" }, true)

exports.delete = function(req, res, next) {
  req.user.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.user);
    }
  })
};



