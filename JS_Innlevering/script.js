const konverteringsFaktorer = {
    gallons: {
        liters: 3.78541,
        ounces: 128,
        cups: 16,
        spiseskjeer: 256
    },
    ounces: {
        liters: 0.0295735,
        gallons: 0.0078125,
        cups: 0.125,
        spiseskjeer: 2
    },
    cups: {
        liters: 0.236588,
        gallons: 0.0625,
        ounces: 8,
        spiseskjeer: 16
    },
    spiseskjeer: {
        liters: 0.0147868,
        gallons: 0.00390625,
        ounces: 0.5,
        cups: 0.0625
    },
    liters: {
        gallons: 0.264172,
        ounces: 33.814,
        cups: 4.22675,
        spiseskjeer: 67.628
    }
};
    //konverteringsfaktorer er en array som inneholder konverteringsfaktorer for ulike volumenheter


    document.getElementById('KonverterKnapp').addEventListener('click', function() {
    let input = document.getElementById('Volumverdi1').value.toLowerCase(); 
    let enhetFra = document.getElementById('Volumvelger1').value; 
    let enhetTil = document.getElementById('Volumvelger2').value; 
    let resultat;
    //henter inn input fra brukeren, og konverterer det til lowercase for å unngå feil ved input.
    
    if (enhetFra !== enhetTil) {
        resultat = parseFloat(input) * konverteringsFaktorer[enhetFra][enhetTil]; //Parsefloat gjør om stringen til et tall, og konverterer inputen til en annen enhet ved hjelp av konverteringsfaktorene.
    } else {
        resultat = parseFloat(input); 
    }
    //hvis enhetene er like, så vil resultatet være det samme som inputen. Hvis ikke, så vil resultatet være inputen ganget med konverteringsfaktoren mellom enhetene.

    
    document.getElementById('resultat').textContent = "Resultat: " + resultat + ' ' + enhetTil;
});

    //volument konverterer funksjonen tar inn input fra brukeren, og konverterer det til en annen enhet.


    const checkpali = (x) => {
    return x = x.split('').reverse().join('')
    //split gjør om stringen til en array, reverse reverserer arrayen, og join gjør arrayen til en string igjen.
}

    function checkpalindrom() {
    const tall2 = document.getElementById('number1').value
    //henter inn input fra brukeren

    const konvertert = checkpali(tall2)

    if(tall2 == konvertert) return document.getElementById('presultat').innerHTML = `This is a palindrome`
    if(tall2 !== konvertert) return document.getElementById('presultat').innerHTML = `This is not a palindrome`
    //hvis inputen er det samme som konvertert, så vil det være en palindrome. Hvis ikke, så vil det ikke være en palindrome.


}

    //palindrome function gjør om stringen til en array, reverserer den og gjør den til en string igjen.
    