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