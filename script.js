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
    document.getElementById("result").innerHTML="Your BMI is: " + BMI;

    // adding more information to the result
    /*
    if (BMI < 20) {
        var result = document.getElementById("result");
        var text = document.createTextNode(" (malnutrition)");
        
        result.appendChild(text);
    }
    else if (20 < BMI > 25) {
            var result = document.getElementById("result");
            var text = document.createTextNode(" (ideal weight)");
            
            result.appendChild(text);
        }
        else if (25 < BMI < 30) {
                var result = document.getElementById("result");
                var text = document.createTextNode(" (overweight)");
                
                result.appendChild(text);
            }
            else if (BMI > 30) {
                    var result = document.getElementById("result");
                    var text = document.createTextNode(" (obesity)");
                    
                    result.appendChild(text);
                }*/
}