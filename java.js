function increment () {
    console.log("I LOVE ME")
}
function number() {
    console.log(42)
}
number();

lap1= 10;
lap2=12;
lap3=13;

function sumLaps () {
    let sumLaps = lap1 + lap2 + lap3;
    console.log(sumLaps)
    
}
sumLaps();
 
lapsCompleted = 0;

function laps () {
    lapsCompleted++;
    console.log(lapsCompleted);

}

laps(); 
laps();
laps();

let saveEl = document.getElementById ('save-el');

let countEl = document.getElementById("count-el");

console.log(countEl)

let count = 0;

 function increment () {
     count +=1;
     countEl.innerText = count
     console.log(count);

 } 

 
function save () {
    console.log(count);

}

save();

let welcomeEl = document.getElementById("welcome-el");

let name = "laise";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + name; 








