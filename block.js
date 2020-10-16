var mongoose = require("mongoose")
var express = require("express")
mongoose.connect("mongodb://localhost/serious", { useNewUrlParser: true, useUnifiedTopology: true })
var app = express()
var PORT = 3000 || process.env.PORT;

app.set("view engine", "ejs")

app.set("views", require("path").join(__dirname, "views"))

var con = mongoose.connection

app.use(express.json())

app.use("/jac", require("./routers/jac"))
app.get("/", (req, res) => {
    res.render("login")
})
app.get("/register", (req, res) => {
    res.render("register")
})

app.get("*",(req,res)=>{
    res.send("ERROR!!!!!!!!!!!!!!!!!!")})
con.on("open", () => {
    console.log("fired up the database bitch!!!")
})
app.listen(PORT, () => { console.log("go shivam") })
