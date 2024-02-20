//Chiediamo all'utente l'età e salviamo 
let age = document.getElementById("age")
//Chiediamo all'utente il numero di chilometri che vuole percorrere
let km = document.getElementById("km")
//Chiediamo all'utente il suo nome e cognome 
let FullName = document.getElementById("full_name")
// inseriamo un bottone che andrà ad identificare il prezzo finalale
document.querySelector("button").addEventListener("click", myFunction)

//function
function myFunction(){
    console.log (Number(age.value)) ; 
    console.log (Number(km.value));
    console.log (String(FullName.value));
    let userAge = Number(age.value);
    let Distance = Number(km.value);
    let Price = Distance * 0.21;
//comparatore 
    if (userAge < 18) {
        Price *= 0.8
    } else if (userAge > 65){
        Price *= 0.6
    }

    Price = Price.toFixed(2);
    console.log(Price);
//stampiamo il prezzo sulla pagine html
    document.getElementById("valor").innerHTML = Price;
}



