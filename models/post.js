var db = require('../db');
var Post = db.model('Post', {
    username: { type: String, required: true },
    dogname:  {type: String },
    body:     { type: String, required: true },
    date:     { type: Date, required: true, default: Date.now }
});
module.exports = Post;