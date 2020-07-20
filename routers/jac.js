var express = require("express")
const mymode = require("../models/mymodel.js")
var routers = express.Router()
var bodyparser = require("body-parser")
const mymodel = require("../models/mymodel.js")

var urlencoder = bodyparser.urlencoded({ extended: false })


routers.post("/", urlencoder, (req, res) => {
    mymodel.findOne({ name: req.body.Username, email: req.body.email, password: req.body.password }, (error, user) => {
        if (error) {
            console.log(error)

        }
        if (!user) {
            res.render("msg")
        } else {
            res.render("naach", { naam: req.body.Username })
        }
    })
});

routers.post("/daal", urlencoder, (req, res) => {

    const entry = new mymodel({
        name: req.body.Username,
        email: req.body.email,
        password: req.body.password
    })
    entry.save()
    res.render("login")

});

module.exports = routers;