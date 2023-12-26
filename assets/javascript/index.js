// team positons
const point = document.getElementById('Point');
const mid = document.getElementById('Mid');
const anchor = document.getElementById('Anchor');

// interation layer
const btn = document.getElementById('btn');
const assistCheck = document.getElementById('assist');
    // seasons
const seasonOne = document.getElementById('season-1')
const seasonOnelist = document.getElementById('season-1-list')
    //
const seasonTwo = document.getElementById('season-2')
const seasonTwolist = document.getElementById('season-2-list')
    //
const seasonThree = document.getElementById('season-3')
const seasonThreelist = document.getElementById('season-3-list')
    //
const a21check = document.getElementById('android21')

// last roll layer
const lastRoll = document.getElementById('lastRoll');
const hidden = document.getElementById('hidden')

// characters from roaster.js
const roaster = Characters

let lastTeam = []

let blacklist = []

const team = [
    {
        name: "",
        num: 0,
        assist: '',
        position: point
    },
    {
        name: "",
        num: 0,
        assist: '',
        position: mid
    },
    {
        name: "",
        num: 0,
        assist: '',
        position: anchor
    }
]

const assistsArray = ['A', 'B', 'C']

function checkerHandler(children, checked) {
    for (const child of children) {
        child.children[0].checked = checked
        if (!checked) {
            if (!blacklist.includes(child.children[0].value)) {
                blacklist.push(child.children[0].value)
            }
            continue
        }
        const newlist = blacklist.filter(list => {
            if (child.children[0].value === list) {
                return
            }
            return list
        })
        blacklist = newlist
    }
}


function checkboxHandler(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    switch (name) {
        case 'season-1':
            checkerHandler(seasonOnelist.children, checked)
            break
        case 'season-2':
            checkerHandler(seasonTwolist.children, checked)
            break
        case 'season-3':
            checkerHandler(seasonThreelist.children, checked)
            break
        default:
            if (checked != undefined) {
                checkerHandler([{ children: [e.target] }], checked)
            }
            break
    }
}

function printLastTeam() {
    lastRoll.replaceChildren()
    for (const player of lastTeam) {
        // =Container=
        var characterContainer = document.createElement("div");
        characterContainer.classList = "oldChraCont"
        // =Image=
        var lastCharacter = document.createElement("img");
        lastCharacter.src = "./assets/images/" + player.num + ".png";
        characterContainer.appendChild(lastCharacter);
        // =Assist=
        if (assistCheck.checked) {
            var assistContainer = document.createElement("h4");
            assistContainer.innerText = player.assist
            characterContainer.appendChild(assistContainer);
        }
        // =Append=
        lastRoll.appendChild(characterContainer);
    }
    hidden.classList = "oldTeam"
}

function printTeam() {
    // this is where everything gets rendered, starting with point characters.
    for (const player of team) {
        var charTitle = document.createElement("h1");
        charTitle.classList = "charName"
        charTitle.innerText = player.name;

        player.position.replaceChildren(charTitle)

        var charPort = document.createElement("img");
        charPort.src = `./assets/images/${player.num}.png`

        player.position.appendChild(charPort)

        if (assistCheck.checked) {
            var assistHtml = document.createElement("h3");
            const assist = player.assist;
            assistHtml.textContent = `${assist} Assist`

            player.position.appendChild(assistHtml)
        }
    }
}

function newTeam() {
    let newRoaster = roaster.filter(ele => {
        const checker = blacklist.includes(`${ele.num}`);
        if (checker) {
            return
        }
        return ele
    })
    for (const position of team) {
        const n = Math.floor(Math.random() * newRoaster.length)

        position.name = newRoaster[n].name;
        position.num = newRoaster[n].num;
        position.assist = assistsArray[Math.floor(Math.random() * 6 / 2)]

        const evenNewerRoaster = newRoaster.filter(character => character.num != newRoaster[n].num)
        newRoaster = evenNewerRoaster
    }
}

const ButtonHandler = (e) => {
    // this is for saving the last team to refrence in a component
    if (team[0].name) {
        const currentTeam = team
        lastTeam = currentTeam
        printLastTeam()
    }
    newTeam();
    printTeam();
}

btn.addEventListener("click", ButtonHandler)
seasonOne.addEventListener("click", checkboxHandler)
seasonTwo.addEventListener("click", checkboxHandler)
seasonThree.addEventListener("click", checkboxHandler)
seasonOnelist.addEventListener("click", checkboxHandler)
seasonTwolist.addEventListener("click", checkboxHandler)
seasonThreelist.addEventListener("click", checkboxHandler)
a21check.addEventListener("click", checkboxHandler)