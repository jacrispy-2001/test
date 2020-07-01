if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const DAK = process.env.DAK
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {

})

app.listen(3000, () => {
    console.log('server started')
})