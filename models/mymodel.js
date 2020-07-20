var mongoose = require("mongoose")



var myschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }

}, { strict: false })

var mymodel = mongoose.model("info", myschema)

module.exports = mymodel;