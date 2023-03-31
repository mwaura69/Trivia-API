//getting the results from the API link
const xlhttp = new XMLHttpRequest();
xlhttp.onload = function () {
let data= JSON.parse(this.responseText);
data.forEach(item => {
    const pad = document.getElementById("demo");
    pad.innerHTML = `
    <p id="item-categ">${item.category}</p>
    <h2 id="header">${item.question}</h2>
    <div id="div-container">
        <button id="co-ans">${item.correctAnswer}</button>
        <button id="in-ans1">${item.incorrectAnswers[0]}</button>
        <button id="in-ans2">${item.incorrectAnswers[1]}</button>
        <button id="in-ans3">${item.incorrectAnswers[2]}</button>
    </div>
    <p id="disp-space"></p>
    `  
    //styling the elements listed in the Question and answer API
    const meno = document.getElementById("disp-space");
    meno.style.fontSize = "28px";
    const boxy = document.getElementById("div-container");
    boxy.style.display = "flex";
    const categ = document.getElementById("item-categ");
    categ.style.fontSize = "30px";
    categ.style.textDecoration = "underline"
    const header = document.getElementById("header");
    header.style.fontSize = "30px";


    //button spacing
    const correctly = document.getElementById("co-ans");
    correctly.style.marginRight = "20px";
    correctly.style.padding = "10px";
    const incorrectly1 = document.getElementById("in-ans1");
    incorrectly1.style.marginRight = "20px";
    const incorrectly2 = document.getElementById("in-ans2");
    incorrectly2.style.marginRight = "20px";
    const incorrectly3 = document.getElementById("in-ans3");
    incorrectly3.style.marginRight = "20px";

    //randomizing the position of each button
    const divy = document.querySelector("#div-container");
    for(let i = divy.children.length; i >= 0; i--) {
        divy.appendChild(divy.children[Math.random() * i | 0])
    }
    

    //adding event listeners to the four choice buttons
    correctly.addEventListener("click", e => {
        document.getElementById("disp-space").innerHTML = "correct";
    })
    incorrectly1.addEventListener("click", e => {
        document.getElementById("disp-space").innerHTML = "wrong!!";
    })
    incorrectly2.addEventListener("click", e => {
        document.getElementById("disp-space").innerHTML = "wrong!";
    })
    incorrectly3.addEventListener("click", e => {
        document.getElementById("disp-space").innerHTML = "wrong!!!!";
    })

})
}
const aPIkey = "https://the-trivia-api.com/api/questions?someQuizId";
xlhttp.open("GET", aPIkey);
xlhttp.send()








//getting the button function of the API every time its clicked
const quizApi = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
    let data= JSON.parse(this.responseText);
    data.forEach(item => {
        const pad = document.getElementById("demo");
        pad.innerHTML = `
        <p id="item-categ">${item.category}</p>
        <h2 id="header">${item.question}</h2>
        <div id="button-container">
            <button id="cor-ans">${item.correctAnswer}</button>
            <button id="inc-ans1">${item.incorrectAnswers[0]}</button>
            <button id="inc-ans2">${item.incorrectAnswers[1]}</button>
            <button id="inc-ans3">${item.incorrectAnswers[2]}</button>
        </div>
        <p id="disp-space"></p>
        `
        //defining every tag in the elements above
        const meno = document.getElementById("disp-space");
        meno.style.fontSize = "28px";
        const boxy = document.getElementById("button-container");
        boxy.style.display = "flex";
        const categ = document.getElementById("item-categ");
        categ.style.fontSize = "30px";
        categ.style.textDecoration = "underline"
        const header = document.getElementById("header");
        header.style.fontSize = "30px";

        //shuffling the button position every time the question reloads
        const container = document.querySelector("#button-container");
        for(let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0])
        }

        //defining and getting the spaces of each of the four buttons
        const correct = document.getElementById("cor-ans");
        correct.style.marginRight = "20px";
        correct.style.padding = "10px";
        const incorrect1 = document.getElementById("inc-ans1");
        incorrect1.style.marginRight = "20px";
        const incorrect2 = document.getElementById("inc-ans2");
        incorrect2.style.marginRight = "20px";
        const incorrect3 = document.getElementById("inc-ans3");
        incorrect3.style.marginRight = "20px";
        
        //getting the click events of the afore mentioned buttons
        correct.addEventListener("click", e => {
            document.getElementById("disp-space").innerHTML = "correct";
        })
        incorrect1.addEventListener("click", e => {
            document.getElementById("disp-space").innerHTML = "wrong!";
        })
        incorrect2.addEventListener("click", e => {
            document.getElementById("disp-space").innerHTML = "wrong!!";
        })
        incorrect3.addEventListener("click", e => {
            document.getElementById("disp-space").innerHTML = "wrong !!!";
        })

    })
    }
    const aPIkey = "https://the-trivia-api.com/api/questions?someQuizId";
    xhttp.open("GET", aPIkey);
    xhttp.send()
}

document.getElementById("my-button").addEventListener("click", quizApi)
