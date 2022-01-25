const point = document.getElementById('Point');
const mid = document.getElementById('Mid');
const anchor = document.getElementById('Anchor');
const btn = document.getElementById('btn');
const assistCheck = document.getElementById('assist');

const roaster = Characters

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




function printTeam() {
    // this is where everything gets rendered, starting with point characters.
    for (let i = 0; i < 3; i++) {
        var charTitle = document.createElement("h1");
        var titleText = document.createTextNode(team[i].name);
        
        charTitle.replaceChildren(titleText);

        var charPort = document.createElement("img");
        var assistHtml = document.createElement("h3");

        if(assistCheck.checked) { 
            var assist = team[i].assist;

            switch(assist) {
                case 0:
                    assistHtml.textContent = "A Assist"
                    break
                case 1:
                    assistHtml.textContent = "B Assist"
                    break
                default:
                    assistHtml.textContent = "C Assist"
            }
        }

        switch(i) {
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

const ButtonHandler = (e) => {    
    let newRoaster = roaster.map(ele => ele.name)

    for (let i = 0; i < 3; i++) {
        let n = Math.floor(Math.random()*newRoaster.length)
        
        if (i === 0) {
            
            pointC.name = newRoaster[n]
            pointC.num = n
            pointC.assist = Math.floor(Math.random()*6/2)

        }
        else if (i === 1) {
            
            midC.name = newRoaster[n]
            midC.num = n
            midC.assist = Math.floor(Math.random()*6/2)
            if (midC.name === pointC.name) {
                i--
            }

        }
        else {
            
            anchorC.name = newRoaster[n]
            anchorC.num = n
            anchorC.assist = Math.floor(Math.random()*6/2)
            if (anchorC.name === pointC.name || anchorC.name == midC.name) {
                i--
            }
        }
    }

    printTeam()
}



btn.addEventListener("click", ButtonHandler)