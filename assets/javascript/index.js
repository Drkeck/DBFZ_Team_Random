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

const lastTeam = []

let blacklist = []

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

function checkerHandler(children, checked) {
    for (const child of children) {
        child.children[0].checked = checked
        if (!child.children[0].checked) {
            blacklist.push(child.children[0].value)
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
    for (let i = 0; i < 3; i++) {
        // This is where we will build the element.

        // =Container=
        var characterContainer = document.createElement("div");

        // =Image=
        var lastCharacter = document.createElement("img");
        lastCharacter.src = "./assets/images/" + lastTeam[i].num + ".png";
        characterContainer.appendChild(lastCharacter);

        // =Assist=
        if (assistCheck.checked) {
            var assistContainer = document.createElement("h4");
            assistContainer.innerText = lastTeam[i].assist === 0 ? 'A' : lastTeam[i].assist === 1 ? 'B' : 'C';
            characterContainer.appendChild(assistContainer);
        }

        // =Append=
        lastRoll.appendChild(characterContainer);
    }
    hidden.classList = "oldTeam"
}

function printTeam() {
    // this is where everything gets rendered, starting with point characters.
    for (let i = 0; i < 3; i++) {
        var charTitle = document.createElement("h1");
        charTitle.classList = "charName"
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
        position.assist = Math.floor(Math.random() * 6 / 2)

        const evenNewerRoaster = newRoaster.filter(character => character.num != newRoaster[n].num)
        newRoaster = evenNewerRoaster
    }   
}

const ButtonHandler = (e) => {
    // this is for saving the last team to refrence in a component
    if (team[0].name) {
        const currentTeam = [{ num: team[0].num, assist: team[0].assist }, { num: team[1].num, assist: team[0].assist }, { num: team[2].num, assist: team[2].assist }] // save the team in a variable that isnt a reference.
        lastTeam.pop()
        lastTeam.pop()
        lastTeam.pop()
        lastTeam.push(...currentTeam) // take the non refernece and push it up.

        // this is when we build the last team element.
        printLastTeam()
    }
    // will work on this part later cause this is the only way i can get it to work so far
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