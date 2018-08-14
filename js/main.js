
var btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked");
    //btn.removeEventListener("click", buttonClicked);
    //document.getElementById("text").innerHTML = "Don't do it";
    //console.log(document.getElementById("text").innerHTML);
    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");

    var results = document.getElementById("text");

    results.innerHTML = "Hello, " + customText[0].value + "<br />";

    console.log(textArea);
    results.innerHTML += "Message: " + textArea[0].value;

}

btn.addEventListener ("click", buttonClicked);



function missingno(numbers){
    var missing = -1;
    var sorted = numbers.sort(function(a, b){return a - b;})

    for(i = sorted[0]; i <= numbers.length - 1; i++){
        if(numbers.indexOf(i) === -1){
            missing = i;
        }
    }

    return missing;
}
var numbers = [3, 8, 7, 9, 6, 1, 12, 5, 14, 2, 19, 16, 18, 11, 10, 4, 13, 17, 20];

console.log(missingno(numbers))