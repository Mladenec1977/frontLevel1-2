function delSquare() {
    let x = document.getElementById("square1");
    if (x != null) {
        x.remove();
    }
}

function delSquareCss() {
    let x = document.getElementById("square1");
    if (x != null) {
        let xClass = x.className;
        if (xClass !== "hidden") {
            x.className = "hidden";
        } else {
            x.className = "square";
        }
    }
}

// ******************** 3 *********************
function turnOnOf() {
    let a = document.getElementsByClassName("square3");
    let onOf = true;
    if (a[0].hidden) {
        onOf = false;
    }
    for (let i = 0; i < a.length; i++) {
        a[i].hidden = onOf;
    }
}

// ******************** 4 *********************
function selectorOnOf() {
    let nameSelector = document.getElementById('nameSelector').value;
    if (nameSelector === "") {
        return;
    }
    let findSelector = document.querySelectorAll(nameSelector);
    if (findSelector.length > 0) {
        for (let i = 0; i < findSelector.length; i++) {
            if (findSelector[i].hidden) {
                findSelector[i].hidden = false;
            } else {
                findSelector[i].hidden = true;
            }
        }
    } else {
        console.log("No selector - " + nameSelector);
    }
}

// ******************** 5 *********************
function squareAlert(e) {
    alert("Hello");
    e.onclick = function () {
        this.remove();
    };
}

// ******************** 6 *********************
function mOver() {
    let e = document.getElementById("square6");
    e.hidden = false;
}

function mOut() {
    let e = document.getElementById("square6");
    e.hidden = true;
}

// ******************** 7 *********************
function square7Green(e) {
    let square = document.getElementById("square7");
    square.style.background = "green";
}

function square7White() {
    let e = document.getElementById("square7");
    e.style.background = "white";
}

// ******************** 8 *********************
function imgLoad() {
    let linkInput = document.getElementById("findImg").value;
    if (linkInput.length > 0) {
        let element = document.getElementById("img8");
        element.setAttribute("src", linkInput);
    }
}

// ******************** 9 *********************
function imgLoadMulti() {
    let linkInput = document.getElementById("findImgMulti").value.split('\n');
    for (let i = 0; i < linkInput.length; i++) {
        let objImg = document.createElement("img");
        objImg.setAttribute("src", linkInput[i]);
        let element = document.getElementById("nextImg");
        element.appendChild(objImg);
    }
}

// ******************** 10 - 11 - 12 *********************
document.body.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let userLang = navigator.language;
    navigator.geolocation.getCurrentPosition(function (position) {
        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;
        document.getElementById("iconXYtext2").innerHTML =
            "latitude - " + userLat + "<br> longitude - " + userLong;
    });
    document.getElementById("iconXYtext").innerHTML =
        "X - " + x + ":  Y - " + y + ":" +
        "<br> Lang - " + userLang;
};

// ******************** 13 *********************
document.getElementById('inpLevel13-1').value = localStorage.getItem('inpLevel13');
document.getElementById('inpLevel13-1').addEventListener('keyup', function () {
    let inpLevel13p1 = document.getElementById('inpLevel13-1').value;
    localStorage.setItem('inpLevel13', inpLevel13p1);
});

let strCookie = document.cookie.split("; ").map(cook => cook.split("="));
for (let i = 0; i < strCookie.length; i++) {
    if (strCookie[i][0] === "inpLevel13") {
        document.getElementById('inpLevel13-2').value = strCookie[i][1];
    }
}
document.getElementById('inpLevel13-2').addEventListener('keyup', function () {
    let inpLevel13p1 = document.getElementById('inpLevel13-2').value;
    document.cookie = 'inpLevel13=' + inpLevel13p1;
    console.log(document.cookie);
});

document.getElementById('inpLevel13-3').value = sessionStorage.getItem('inpLevel13');
document.getElementById('inpLevel13-3').addEventListener('keyup', function () {
    let inpLevel13p1 = document.getElementById('inpLevel13-3').value;
    sessionStorage.setItem('inpLevel13', inpLevel13p1);
});

// ******************** 14 *********************
document.getElementById('upList').addEventListener('click', function () {
    let topList = this.offsetTop;
    console.log(topList);
    window.scrollBy({
        top: -topList,
        behavior: 'smooth'
    });
});

// ******************** 15 *********************
document.getElementById('divSmallOne').addEventListener('click', function () {
    document.getElementById('divBigOne').onclick = false;
});

// ******************** 16 *********************
function hiddenSquare16() {
    document.getElementById('square16').hidden = false;
    document.body.style.overflow = "hidden";
}

document.getElementById('square16').onclick = function () {
    this.hidden = true;
    document.body.style.overflow = "scroll";
}

// ******************** 17 *********************
function ofReboot() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

    }
}

// ******************** 18 *********************
function dragEnter(event) {
    if (event.target.className == "dragndrop") {
        event.target.style.background = "yellow";
        event.target.style.border = "3px dotted black";
    }
}

function dragLeave(event) {
    if (event.target.className == "dragndrop") {
        event.target.style.background = "";
        event.target.style.border = "";
    }
}

let textCSV1 = `10,20,Кропивницкий,200000
10,60,Харьков,500000
7,40,Львов,300000
#fdsfsdfsdf
12,80,Одесса,600000
9,80,Тернополь,100000
6,80,Франковск,700000
9,50,Чернвоцы,100000
10,80,Ужгород,100000
9,80,Луцк,800000
7,80,Хмельницк,100000
16,90,Винница,2900000
8,80,Суммы,50000
10,10,Киев,4000000
12,7,Луцк,5000000
16,32,Ивано-Франковск,1000000
`

function arrayParseCSV(text) {
    let array = text.split('\n')
        .filter(s => s !== "" && !s.startsWith("#"))
        .map(a => {
            let res = a.split(',');
            return {x: res[0], y: res[1], name: res[2], population: res[3]}
        })
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((a, b, c) => {
            a[b.name] = {population: b.population, rating: c};
            return a;
        });
    return array;
}

function citiReplace(text, arrayCiti) {
    return text.split(' ').map(a => {
        if (arrayCiti[a]) {

            return a + " ('население: " + arrayCiti[a]['population'] + ", рейтинг: " + arrayCiti[a]['rating'] + ")";
        }
        return a;
    })
        .reduce((a, b) => {
            return a + " " + b;
        });
}

let citiAr = arrayParseCSV(textCSV1);
let textIncoming = "Кропивницкий был основан в 905 году гетьманом Святославом Мудрым. Многие выдающиеся личности говорили про Кропивницкий как про родину хлебопекарства в Украине.";

console.log(citiReplace(textIncoming, citiAr));