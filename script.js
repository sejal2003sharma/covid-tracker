var rec = document.querySelector("#rec")
var dea = document.querySelector("#dea")
var inf = document.querySelector("#inf")
var date = document.querySelector("#date")

fetch("https://covid19.mathdro.id/api").then(data => data.json()).then(
    data => {
     
        inf.textContent = data.confirmed.value
        rec.textContent = data.recovered.value
        dea.textContent = data.deaths.value
        date.textContent = new Date(data.lastUpdate).toDateString()

    }
)


