// Grabbing all the ID's of the elements
var mainTitle = document.getElementById("mainTitle");
var title = document.getElementById("title");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var result = document.getElementById("result");
var button = document.getElementById("calculateButton");
var footer = document.getElementById("footerMonth");
var donate = document.getElementById("donate");
var donateTitle = document.getElementById("donate");

function English() {
    mainTitle.innerText = "BMI Calculator";
    title.innerText = "BMI Calculator";
    height.placeholder = "Enter height (cm)";
    weight.placeholder = "Enter weight (kg)";
    result.innerText = "Your BMI is:";
    button.innerText = "Calculate";
    footer.innerText = "June";
    donate.innerText = "Donate";
    donateTitle.title = "Opens PayPal donation webpage";
}

function Finnish() {
    mainTitle.innerText = "BMI Laskin";
    title.innerText = "BMI Laskin";
    height.placeholder = "Syötä pituus (cm)";
    weight.placeholder = "Syötä paino (kg)";
    result.innerText = "Sinun BMI on:";
    button.innerText = "Laske";
    footer.innerText = "Kesäkuu";
    donate.innerText = "Lahjoita";
    donateTitle.title = "Avaa PayPalin lahjoitussivun";
}

function SerbianCyrillic() {
    mainTitle.innerText = "БМИ Калкулатор";
    title.innerText = "БМИ Калкулатор";
    height.placeholder = "Унеси висину (цм)";
    weight.placeholder = "Унеси тежину (кг)";
    result.innerText = "Твој БМИ је:";
    button.innerText = "Израчунај";
    footer.innerText = "Јун";
    donate.innerText = "Донирај";
    donateTitle.title = "Отвара PayPal донаторску веб страницу";
}

function SerbianLatin() {
    mainTitle.innerText = "BMI Kalkulator";
    title.innerText = "BMI Kalkulator";
    height.placeholder = "Unesi visinu (cm)";
    weight.placeholder = "Unesi težinu (kg)";
    result.innerText = "Tvoj BMI je:";
    button.innerText = "Izračunaj";
    footer.innerText = "Jun";
    donate.innerText = "Doniraj";
    donateTitle.title = "Otvara PayPal donatorsku veb stranicu";
}

// function that when clicked grabs values from fields
function Calculate() {
    // grabbing height value
    var height = document.getElementById("height").value;

    // grabbing weight value
    var weight = document.getElementById("weight").value;
    
    // calculating BMI
    var BMI = weight / (height / 100 * height / 100);
    var BMI = (BMI.toFixed(2));

    // showing the calculated BMI
    document.getElementById("calculatedBMI").value = BMI;
}

// Being able to press the calculate button by Enter key
var input = document.getElementById("weight");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13)
        document.getElementById("calculateButton").click();
});