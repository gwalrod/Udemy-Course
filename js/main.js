
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

function alertMe(){
   alert("Me")
}

$(document).ready(function(){
    
    alert("Loaded");

    /*document.getElementById('text').innerHTML = "This is my text";
    $('#text').html("This is now my text");*/

    /*document.getElementsByClassName('my-input')[0].value = "Value of input";
    $('.my-input').val("New Input Val");*/

    var el = document.getElementById('text');

    console.log("EL in Vanilla JS:", el);

    console.log("EL in jQuery:", $(el));

    document.getElementById('go-button').addEventListener('click', alertMe);

    $('#go-button').on('click', function(){
        alert("Fantastic job clicking that button!")
    })

    //mouseLEAVE mouseenter mouseup mousedown

    $('#go-button').hover(function(){
       console.log("Fantastic job hovering over that button!")
    })


})