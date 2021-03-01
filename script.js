let person = {
    name: null,
    startbid: 0,
    Loveletter: null
}

var name;
var price;
var report = new Array;

let groomsName = () => {
    person.name = prompt("Please, write groom's name");
}
groomsName();

let groomsPrice = () => {
    person.startbid = parseInt(prompt("Please, choose start bid ($)"));
}
groomsPrice();

let Loveletter = (Loveletter) => {
    person.Loveletter = Loveletter;
}

var total = Number(person.startbid);

function Fncfirst() {
    var education = document.getElementById("education").value;
    if (education == 1.1) {
        total = person.startbid * 1.5;
        console.log(education + " " + total);
    } else if (education == 1.2) {
        total = person.startbid * 1.2;
        console.log(education + " " + total);
    } else if (education == 1.3) {
        total = person.startbid * 1.05;
        console.log(education + " " + total);
    } else if (education == 1.4) {
        total = person.startbid * 0.9;
        console.log(education + " " + total);
    }
}

function second() {
    var family = document.getElementById("family").value;

    if (family == 2.1) {
        total *= 2;
        console.log(family + " " + total);
    } else if (family == 2.4) {
        total *= 1.5;
        console.log(family + " " + total);
    } else if (family == 2.3) {
        total *= 1.2;
        console.log(family + " " + total);
    }
}

function others(id) {
    var options = document.getElementsByName(id);



    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (id == "chboxskill") {
                calculating_chboxskill(options[i].value);
            } else if (id == "age") {
                calculating_age(options[i].value);
            } else if (id == "reputation") {
                calculating_rep(options[i].value);
            }
        }
    }
}

function calculating_chboxskill(skill) {
    total += Number(parseInt(skill));
    console.log(skill + " skill " + total);
}


function calculating_age(num) {
    total *= Number(num);
    console.log(num + " age " + total);
}

function calculating_rep(reputation) {
    if (reputation == 0.85 || reputation == 0.9) {
        total *= Number(reputation);
        console.log(reputation + " reputation " + total);
    } else {
        total -= Number(reputation);
        console.log(reputation + " reputation " + total);
    }
}

const checkedReput = new Array;

checkedReput.forEach((item, i) => {
    if (reputationEls[i].checked == true) {
        checkedReput.push(parseFloat(item));
    }
});

checkedReput.forEach((item, i) => {
    if (checkedReput[i] % 1 == 0 || checkedReput[i] == 0) {
        alert(checkedReput[i]);
        total += checkedReput[i];
    } else {
        total *= checkedReput[i];
    }
});

var button = document.getElementById("submit");
if (button) {
    button.addEventListener("click", calculate, false);
}


let reportFunc = () => {
    var reportFinal = report.reduce(function (sum, current) {
        console.log(`Name: ${sum} \nStart bid: ${current}`);
        return sum + current;
    })
}

let calculate = () => {

    if (person.name == "" || isNaN(person.startbid)) {
        alert("Error");
    } else {
        others("chboxskill");
        others("age");
        others("reputation");

        report.push(person.name);
        report.push(person.startbid);
        reportFunc();

        var templateLetter = document.getElementById('loveLetter').value;
        Loveletter(templateLetter);
        alert("Name: " + person.name + "\nStart price: " + person.startbid + "$" + `\nTotal: ${total} $` + "\nLetter:\n" + person.Loveletter);
    }
}

var button = document.getElementById('acceptButton');
button.addEventListener("click", calculate);















// var reputationEls = document.getElementsByClassName("reputation");

// const handle = () => {
//     if (document.getElementById("name").value != "" 
//         && document.getElementById("price").value != "") {

//         let priceStr = document.getElementById("price").value;
//         let price = parseInt(priceStr);

//         var education = document.getElementById("education").value;
//         var family = document.getElementById("family").value;

//         if (education == "1.1") {
//             price *= 1.5;
//         } else if (education == "1.2") {
//             price *= 1.2;
//         } else if (education == "1.3") {
//             price *= 1.05;
//         } else if (education == "1.4") {
//             price *= 0.9;
//         }

//         if (family == "2.1") {
//             price *= 2;
//         } else if (family == "2.2") {
//             price *= 1.5;
//         } else if (family == "2.3") {
//             price += 100;
//         }

//         const dombyra = document.getElementById("3.1");
//         const cooking = document.getElementById("3.2");
//         const easygoing = document.getElementById("3.3");
//         const sings = document.getElementById("3.4");

//         const skills = [dombyra, cooking, easygoing, sings];

//         for (var i = 0; i < skills.length; i++) {
//             if (skills[i].value == "dombyra" && skills[i].checked) {
//                 price += 100;
//             } else if (skills[i].value == "cooking" && skills[i].checked) {
//                 price += 200;
//             } else if (skills[i].value == "easygoing" && skills[i].checked) {
//                 price += 150;
//             } else if (skills[i].value == "sings" && skills[i].checked) {
//                 price += 100;
//             }
//         }

//         const ages = document.getElementsByName("age");
//         let age = "";

//         for (var i = 0, length = ages.length; i < length; i++) {
//             if (ages[i].checked) {
//                 age = ages[i].value;
//                 break;
//             }
//         }

//         if (age == "1.5") {
//             price *= 1.5;
//         } else if (age == "1.2") {
//             price *= 1.2;
//         } else if (age == "0.95") {
//             price *= 0.95;
//         }

//         const attitude = document.getElementById("5.1");
//         const character = document.getElementById("5.2");
//         const person = document.getElementById("5.3");

//         const gossips = [attitude, character, person];

//         for (var i = 0; i < gossips.length; i++) {
//             if (gossips[i].value == "0.85" && gossips[i].checked) {
//                 price *= 0.85;
//             } else if (gossips[i].value == "0.9" && gossips[i].checked) {
//                 price *= 0.9;
//             } else if (gossips[i].value == "200" && gossips[i].checked) {
//                 price -= 200;
//             }
//         }

//         alert('Bride price is ' + price);
//     }
// }
