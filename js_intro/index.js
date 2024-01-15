//oppgave 1 

let navn = "Anders";
let alder = 16;

let ErEnElev = true;

console.log('Hei ', navn, 'du er ', alder, ' år gammel');

if (ErEnElev) {
    console.log('Du er elev');
} else {
    console.log('Du er ikke elev');
}

a = 2;

console.log(a + a);

function Gangetallmedelleve() {
    let i = 1;
    while(i <= 11) {
        console.log(11 * i);
        i++;
    }
}

Gangetallmedelleve();


let num1 = 7; 
let num2 = 3; 

function multiplyNumbers(a, b) {
    console.log(a * b);
}

multiplyNumbers(num1, num2);
