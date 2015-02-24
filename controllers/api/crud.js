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


//Read

db.posts.find()

db.posts.find({})

db.posts.find({ "user": "alice" })

db.posts.find({ "user": { $in: ["alice", "bob"] } })

"http://docs.mongodb.org/manual/reference/operator/query/#query-selectors"

    //And

db.posts.find({ "user": "alice", "commentsCount": { $gt: 10 }  })


    //Or

db.posts.find( { $or: [{ "user": "alice" }, { "user": "bob" }] })


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
