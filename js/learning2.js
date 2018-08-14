
var isPremiumUser = true;

if(isPremiumUser == true){
    console.log("Thanks for being a loyal customer!")
} else{
    console.log("You should subscribe to our premium service.")
}

var myAge = 4;

if(myAge < 1){
    console.log("You are a baby.")
}else if(myAge < 3){
    console.log("You are a toddler.")
}else if(myAge < 10){
    console.log("You are a big kid.")
}else if(myAge <= 19){
    console.log("You are a teenager.")
}else if(myAge < 40){
    console.log("You are an adult.")
}else{
    console.log("You must be old, you're not in our records")
}

for(var i = 0; i < 10; i++){
    console.log("Current i value is", i)
}


function myFunction(){
    console.log("My name is Gregg")
}

myFunction();

function printName(name, age){
    console.log("Hello,", name, ". You are", age);
}

printName("Gregg", 31);
printName("Bob", 50);

var hobbies = ["pizza", "hockey", "travel"];

//console.log("I no longer enjoy", hobbies.pop());

hobbies.push("chipotle");
console.log(hobbies.shift());

hobbies.unshift("snowboarding");

hobbies.forEach(function(item, index){
    console.log("I like", item, index)
});

if(hobbies.indexOf('chipotle') > -1){
    console.log("I like chipotle!")
}

if(hobbies.indexOf('sports') > -1){

}else{
    console.log("not in array")
}




//functions


function saySomething(phrase){
    console.log("You said:" + phrase)
}

function getPhrase(params){

    var l = 0;

    if(params.phrase){
        var l = params.phrase.length;
    }

    if(typeof params.another !== "undefined"){
        l += params.another.length;
    }

    return l;

}

var p1 = "This is a slightly longer sentence.";
var p2 = "This is a shorter sentence.";

var computed = getPhrase({another: p2});

console.log(computed);

var p = "This is a phrase."
saySomething(p)