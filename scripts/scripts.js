const chosen = document.getElementById("Selected")
const btn = document.getElementById("Choose")

const killers = ["Jason", "Coolkidd", "John Toe", "1x1x1x1", "Noli"]
btn.onclick = () => {
    let choice = Math.floor(Math.random() * killers.length)
    chosen.textContent = "Choice: " + killers[choice]
}

const chosen2 = document.getElementById("Selected2")
const btn2 = document.getElementById("Choose2")

const survs = ["Shedletsky","Two Time", "Guest" ,"Dusekkar", "Chance", "Elliot","Taph", "Builderman", "007n7"]
btn2.onclick = () => {
    let choice = Math.floor(Math.random() * survs.length)
    chosen2.textContent = "Choice: " + survs[choice]
}

const resultSkin = document.getElementById("resultSkin")
const skins = document.getElementById("skins")
const chooseSkinBtn = document.getElementById("chooseSkin")

const jasonSkins = ["Butcher", "Pursuer", "Subject_0", "Delirous"]
const coolkiddSkins = ["Mafioso", "Bluudude"]
const johnDoeSkins = ["Living Legend", "Garshapoon", "Geometry", "Annihalation"]
const x1Skins = ["Pride", "Betrayed"]
const noliSkins = ["Devesto", "Cult", "Toolbox"]

chooseSkinBtn.addEventListener("click", function() {
    const val = skins.value
    let choice

    switch (val) {
        case "jason":
            choice = Math.floor(Math.random() * jasonSkins.length)
            resultSkin.textContent = "Skin: " + jasonSkins[choice]
            break
        case "coolkidd":
            choice = Math.floor(Math.random() * coolkiddSkins.length)
            resultSkin.textContent = "Skin: " + coolkiddSkins[choice]
            break
        case "johnDoe":
            choice = Math.floor(Math.random() * johnDoeSkins.length)
            resultSkin.textContent = "Skin: " + johnDoeSkins[choice]
            break
        case "1x1x1x1":
            choice = Math.floor(Math.random() * x1Skins.length)
            resultSkin.textContent = "Skin: " + x1Skins[choice]
            break
        case "noli":
            choice = Math.floor(Math.random() * noliSkins.length)
            resultSkin.textContent = "Skin: " + noliSkins[choice]
            break
    }
})

const getObjective = document.getElementById("getObjective")
const objectives = ["Do Generators", "Defend Team", "Corner/Be Useless"]
const displayObj = document.getElementById("objective")

getObjective.onclick = () => {
    const obj = objectives[Math.floor(Math.random() * objectives.length)]
    displayObj.textContent = "Objective: " + obj
}