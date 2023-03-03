const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/public/page/index.html")
})

app.post("/", (req, res) =>
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