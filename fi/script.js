// function that when clicked grabs values from fields
function Calculate() {
    // grabbing height value
    var height = document.getElementById("height").value;

    // grabbing weight value
    var weight = document.getElementById("weight").value;
    
    // calculating BMI
    var BMI = weight / (height / 100 * height / 100);
    var BMI = (BMI.toFixed(2));

    // showing the result
    document.getElementById("result").innerHTML="Sinun BMI on: " + BMI;
}