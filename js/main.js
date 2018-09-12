
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


$(document).ready(function(){

    function printThis(el){
        if($(this).text()) {
            console.log($(this).text());
        }else{
            console.log($(this).val());
        }
    }

    var el = document.getElementById('text');


    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

       $('.profile-menu').on('mouseleave', function(){
           submenu.fadeOut(300);
       })

    });

    $('input').focusin(printThis);

    $('input').css({
        background: '#f00',
        padding: '10px',
        borderColor: '#000',
        backgroundSize: 'cover'
    });



});