const point = document.getElementById('Point');
const mid = document.getElementById('Mid');
const anchor = document.getElementById('Anchor');
const btn = document.getElementById('btn');
const assistCheck = document.getElementById('assist');
const lastRoll = document.getElementById('lastRoll');
const hidden = document.getElementById('hidden')

const roaster = Characters

const lastTeam = []

const team = [
    {
        name: "",
        num: 0,
        assist: 0
    },
    {
        name: "",
        num: 0,
        assist: 0
    },
    {
        name: "",
        num: 0,
        assist: 0
    }
]

let pointC = team[0];
let midC = team[1];
let anchorC = team[2];

function printLastTeam() {
    lastRoll.replaceChildren()
    for (let i = 0; i < 3; i++) {
        // this is where we will build the element.
        var lastCharacter = document.createElement("img");
        lastCharacter.src = "./assets/images/" + lastTeam[i].num + ".png"
        lastRoll.appendChild(lastCharacter)
    }
    hidden.classList = "oldTeam"
}

function printTeam() {
    // this is where everything gets rendered, starting with point characters.
    for (let i = 0; i < 3; i++) {
        var charTitle = document.createElement("h1");
        var titleText = document.createTextNode(team[i].name);

        charTitle.replaceChildren(titleText);

        var charPort = document.createElement("img");
        var assistHtml = document.createElement("h3");

        if (assistCheck.checked) {
            var assist = team[i].assist;

            switch (assist) {
                case 0:
                    assistHtml.textContent = "A Assist"
                    break
                case 1:
                    assistHtml.textContent = "B Assist"
                    break
                default:
                    assistHtml.textContent = "C Assist"
                    break
            }
        }

        switch (i) {
            case 0:
                point.replaceChildren(charTitle);
                charPort.src = "./assets/images/" + pointC.num + ".png"
                point.appendChild(charPort);
                point.appendChild(assistHtml);
                break
            case 1:
                mid.replaceChildren(charTitle);
                charPort.src = "./assets/images/" + midC.num + ".png"
                mid.appendChild(charPort);
                mid.appendChild(assistHtml);
                break
            case 2:
                anchor.replaceChildren(charTitle);
                charPort.src = "./assets/images/" + anchorC.num + ".png"
                anchor.appendChild(charPort);
                anchor.appendChild(assistHtml);
                break
        }
    }
}

function newTeam() {
    let newRoaster = roaster.map(ele => ele.name)
    for (let i = 0; i < 3; i++) {
        let n = Math.floor(Math.random() * newRoaster.length)

        if (i === 0) {
            pointC.name = newRoaster[n]
            pointC.num = n
            pointC.assist = Math.floor(Math.random() * 6 / 2)
        }
        else if (i === 1) {
            midC.name = newRoaster[n]
            midC.num = n
            midC.assist = Math.floor(Math.random() * 6 / 2)
            if (midC.name === pointC.name) {
                i--
            }
        }
        else {
            anchorC.name = newRoaster[n]
            anchorC.num = n
            anchorC.assist = Math.floor(Math.random() * 6 / 2)
            if (anchorC.name === pointC.name || anchorC.name == midC.name) {
                i--
            }
        }
    }
}

const ButtonHandler = (e) => {
    // this is for saving the last team to refrence in a component
    if (team[0].name) {
        const currentTeam = [{ num: team[0].num }, { num: team[1].num }, { num: team[2].num }] // save the team in a variable that isnt a reference.
        lastTeam.pop()
        lastTeam.pop()
        lastTeam.pop()
        lastTeam.push(...currentTeam) // take the non refernece and push it up.
        console.log(lastTeam)
    }
    // will work on this part later cause this is the only way i can get it to work so far
    newTeam();
    printTeam();
    // this is when we build the last team element.
    printLastTeam();
}



btn.addEventListener("click", ButtonHandler)