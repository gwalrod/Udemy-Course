//events

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
 
     $('#go-button').hover(function(){
        console.log("Fantastic job hovering over that button!")
     }) 
 
 })

 //submenu mouseenter

 $(document).ready(function(){
    var el = document.getElementById('text');

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');

       $('.profile-menu').on('mouseleave', function(){
           submenu.removeClass('active')
       })

    })

    $('#prepend, #append, #replace').on('click', function(e){
        
        console.log(e);
        
    });


});

//switch

switch(event.which){
    case 1:
        console.log("Clicked left mouse button");
        break;
    case 3:
        console.log("Clicked right mouse button");
        break;
}

//mousedown 

$(document).on('mousedown', function(event){
    event.preventDefault();

    if(event.which == 3){

        $('.hidden').removeClass('shown');

        if($(event.target).is('img')){
            $('.saveimg, .newtab').addClass('shown');
        }else if($(event.target).is('a')){
            $('.newtab').addClass('shown');
        }

        console.log(event.pageY, event.pageX);

        $('#context').css({
            top: event.pageY,
            left: event.pageX
        });

        $('#context').fadeIn();
        return false;
    }

    $('#context').fadeOut();

});

//valid and invalid

window.passed = 0;
window.hasAt = 0;
window.hasDot = 0;

$('input[name=email]').on('keyup', function(){

    if($(this).val().indexOf('@') > - 1){
        hasAt++;

        if($(this).val().indexOf('.') > -1){
            hasDot++;
        }
    }

    if(window.hasAt > 1 && window.hasDot > 1){
        $('.status').html('VALID');
    }else{
        $('.status').html('INVALID');
    }

});

//adding classes

   $('#text').find('p').addClass('HAH');

    wQuery(".my-selector").addClass("MYNEWCLASS");

    wQuery("#context").addClass("HELLO");    

//contect menu

    $(document).on('contextmenu', function(){
        return false;
    });

//prevent a link

$('[href="https://google.com"]').on('click', function(event){
    console.log("linking to google?");
    event.preventDefault();
    return false;
});

//submenu consoles

console.log($('.submenu a').first().text());
console.log($('.submenu a').last().text());

//buttons


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

//focusin focusout

$('textarea').focusin(function(){
    console.log("Focused in on the text area");
});

$('textarea').focusout(function(){
    console.log("Text area has lost focus");
});

$('input').focusout(function(){
   if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1){
       $('.status').html("Valid Email");
   }else{
       $('.status').html("Your email is invalid");
   }
});

//contains

$('p:contains("Lorem")').html("This had Lorem in it and yet it still does. ");

$('p').each(function(){
    console.log($(this).text());
});

$('p').each(printThis);

console.log($('p').text());

if($(':contains("Lorem")').is("p")){
    console.log("Lorem is inside paragraph");
}