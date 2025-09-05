const chosen = document.getElementById("Selected")
const btn = document.getElementById("Choose")

const optns = ["Ki ki ki ma ma ma", "Mass Infection!", "Harp-gooners! Fire!"]

btn.onclick = () => {
    let choice = Math.floor(Math.random() * optns.length)
    chosen.textContent = "Choice: " + optns[choice]
}