
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



//exercise 

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

//classes

class Animal {

    constructor(name, height, weight){
        console.log("Created Animal named", name)
        this.name = name;
        this.height = height;
        this.weight= weight;
    }

    nameLength(){
        return this.name.length;
    }

}

class Dog extends Animal{

    constructor(name, height, weight, barkVolume, leashColor, speed){
        super(name, height, weight);
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.speed = speed;
    }

    bark(){
        if(this.barkVolume > 50){
            console.log(this.name, "barks loudly!, (volume:", this.barkVolume, ")");
        }else{
            console.log(this.name, "barks timidly , (volume:", this.barkVolume, ")");
        }

    }
    
}

class Fish extends Animal{

    constructor(name, height, weight, swimSpeed){
        super(name, height, weight);
        this.swimSpeed = swimSpeed;
    }

    swim(chaserSpeed){
        if(this.swimSpeed > 50){
            console.log(this.name, "swims around quickly! (speed:", this.swimSpeed +")")
        }else{
            console.log(this.name, "swims around slowly. (speed:", this.swimSpeed +")")
        }

        if(this.swimSpeed > chaserSpeed){
            console.log(this.name, "got away!");
        }else{
            console.log(this.name, "was caught!");
        }
    
    }

}

var king = new Dog("King", 45, 92, 72, "red", 52);
var goldie = new Fish("Goldie", 2, .1, 46)


king.bark();
goldie.swim(king.speed);

Animal.planet = "Earth";

var dog = new Animal("Fido", 25, 90);
var fish = new Animal("Goldie", 2, .02);

console.log(fish.constructor.planet);