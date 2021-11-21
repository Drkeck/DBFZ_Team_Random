const point = document.getElementById('Point');
const mid = document.getElementById('Mid');
const anchor = document.getElementById('Anchor');
const btn = document.getElementById('btn');

const roaster = Characters

const ButtonHandler = (e) => {
    
    let newRoaster = roaster.map(ele => ele.name)
    
    let pointC = {name: "", num: 0};
    let midC = {name: "", num: 0 };
    let anchorC = {name: "", num: 0};

    for (let i = 0; i < 3; i++) {
        let n = Math.floor(Math.random()*newRoaster.length)
        
        if (i === 0) {
            
            pointC.name = newRoaster[n]
            pointC.num = n
        }
        else if (i === 1) {
            
            midC.name = newRoaster[n]
            midC.num = n
            if (midC.name === pointC.name) {
                i--
            }
        }
        else {
            
            anchorC.name = newRoaster[n]
            anchorC.num = n

            if (anchorC.name === pointC.name || anchorC.name == midC.name) {
                i--
            }
        }
    }


    

    var charTitle1 = document.createElement("h1")
    var titleText1 = document.createTextNode(pointC.name);
    charTitle1.appendChild(titleText1);
    point.replaceChildren(charTitle1);

    var charPort1 = document.createElement("img")
    charPort1.src = "./assets/images/" + pointC.num + ".png"
    point.appendChild(charPort1)

    var charTitle2 = document.createElement("h1")
    var titleText2 = document.createTextNode(midC.name);
    charTitle2.appendChild(titleText2);
    mid.replaceChildren(charTitle2);

    var charPort2 = document.createElement("img")
    charPort2.src = "./assets/images/" + midC.num + ".png"
    mid.appendChild(charPort2)

    var charTitle3 = document.createElement("h1")
    var titleText3 = document.createTextNode(anchorC.name);
    charTitle3.appendChild(titleText3);
    anchor.replaceChildren(charTitle3);

    var charPort3 = document.createElement("img")
    charPort3.src = "./assets/images/" + anchorC.num + ".png"
    anchor.appendChild(charPort3)


}

btn.addEventListener("click", ButtonHandler)