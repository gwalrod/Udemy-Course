
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
    var el = document.getElementById('text');

    $('[href="https://google.com"]').on('click', function(event){
        console.log("linking to google?");
        event.preventDefault();
        return false;
    });

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

       $('.profile-menu').on('mouseleave', function(){
           submenu.fadeOut(300);
       })

    });

    $('#prepend, #append, #replace').on('click', function(e){
        e.preventDefault();

        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if(action == "prepend"){
            console.log("Prepending...");
            $('#text').prepend(content);

        }else if(action == "append"){
            console.log("Appending...");
            $('#text').append(content);


        }else if(action == "replace"){
            console.log("Replacing...");
            $('#text').html(content);


        }

        $('text').val('');

    });


});