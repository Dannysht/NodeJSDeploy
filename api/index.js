const express = require("express")
const path = require("path")
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/api/", (req, res) =>
{
    res.sendFile("index.html", {root: path.join(__dirname, "..", "public/index")})
})

app.post("/api/", (req, res) =>
{
    const dataReceived = req.body.date
    const dateReceived = new Date(dataReceived)
    const dateToday = new Date()
    let days
    if(dateToday < dateReceived)
    {
        days = Math.ceil((dateReceived.getTime() - dateToday.getTime()) / (1000*3600*24))
        days += " more to go." 
    }
    else
    {
        days = Math.ceil((dateToday.getTime() - dateReceived.getTime()) / (1000*3600*24))
        days = "It's been " + days + "."
    }
    res.send({data:{days: days}})
})

app.listen(8080, (error)=>
    {
        if(error)
        {
            console.log(error);
        }
        console.log("App running");
    })

module.exports = app