var db = require('../db');
var Dog = db.model('Dog', {
    ownername: { type: String, required: true },
    dogname:   {type: String,required: true  },
    image:     { type: String}
});
module.exports = Dog;