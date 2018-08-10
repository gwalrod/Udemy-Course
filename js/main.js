
var btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it";
    //console.log(document.getElementById("text").innerHTML);
}

btn.addEventListener ("click", buttonClicked);
