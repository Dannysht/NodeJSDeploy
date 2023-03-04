const form = document.getElementById("form")
const button = document.getElementById("button")

function handleEvent(event)
{
    event.preventDefault()
}

form.addEventListener("submit", handleEvent)

function changeDays(daysUntil)
{
    const days = document.getElementById("days")
    days.innerText = daysUntil
}

function calcDays(event)
{
    const date = {
        date:document.getElementById("inputDate").value
    }  
    console.log(date);
    fetch("/", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(date)
    }).then(response => response.json())
    .then(result =>  changeDays(result.data.days))
    event.preventDefault()
}

button.addEventListener("click", calcDays)