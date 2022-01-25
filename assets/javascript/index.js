const point = document.getElementById('Point');
const mid = document.getElementById('Mid');
const anchor = document.getElementById('Anchor');
const btn = document.getElementById('btn');

const roaster = Characters

let pointC = {name: "", num: 0, assist: ""};
let midC = {name: "", num: 0, assist: "" };
let anchorC = {name: "", num: 0, assist: ""};

function printTeam() {
    // this is where everything gets rendered, starting with point characters.
    var charTitle1 = document.createElement("h1")
    var titleText1 = document.createTextNode(pointC.name);
    charTitle1.appendChild(titleText1);
    point.replaceChildren(charTitle1);

    var charPort1 = document.createElement("img")
    charPort1.src = "./assets/images/" + pointC.num + ".png"
    point.appendChild(charPort1)

    var assistHtml = document.createElement("h3");
    var assistText = document.createTextNode(pointC.assist)
    assistHtml.appendChild(assistText)
    point.appendChild(assistHtml);

    // next mid characters.
    var charTitle2 = document.createElement("h1")
    var titleText2 = document.createTextNode(midC.name);
    charTitle2.appendChild(titleText2);
    mid.replaceChildren(charTitle2);

    var charPort2 = document.createElement("img")
    charPort2.src = "./assets/images/" + midC.num + ".png"
    mid.appendChild(charPort2)

    var assistHtml = document.createElement("h3");
    var assistText = document.createTextNode(midC.assist)
    assistHtml.appendChild(assistText)
    mid.appendChild(assistHtml);

    // and finally the anchor, i know a lot of the team terminology may be lost on some reading this its just a dbfz thing.
    var charTitle3 = document.createElement("h1")
    var titleText3 = document.createTextNode(anchorC.name);
    charTitle3.appendChild(titleText3);
    anchor.replaceChildren(charTitle3);

    var charPort3 = document.createElement("img")
    charPort3.src = "./assets/images/" + anchorC.num + ".png"
    anchor.appendChild(charPort3)

    var assistHtml = document.createElement("h3");
    var assistText = document.createTextNode(anchorC.assist)
    assistHtml.appendChild(assistText)
    anchor.appendChild(assistHtml);
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