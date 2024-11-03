//informazioni lette dal dom
const workSelection = document.getElementById("work-selection");
const finalPriceBefore = document.getElementById ('final-price-before');
const finalPriceAfter = document.getElementById ('final-price-after');
const promoCode = document.getElementById ('promo-code');
const showPrice = document.getElementById ('show-price');

const button = document.getElementById ('form-button');


//calcolo del prezzo

button.addEventListener("click", function (event) {

    event.preventDefault();

    //calcolo prezzo standard

    const index = workSelection.selectedIndex;

    let price = ""

    if (index === 1) {
        console.log('Selezionato backend')
        price = backendPrice * timeCount
    } else if (index === 2) {
        console.log('Selezionato frontend')
        price = frontendPrice * timeCount
    } else if (index === 3) {
        console.log('Selezionato project analysis')
        price = analysisPrice * timeCount
    }
    else {
        console.log('Nessuna selezione')
        alert('Tipo di lavoro non selezionato!')
    }

    console.log(price)
    finalPriceBefore.innerText = price;
    showPrice.classList.remove('d-none');

    //controllo codici sconto



})

// variabili utili per il calcolo del prezzo
const timeCount = 10;
const backendPrice = 20.50;
const frontendPrice = 15.30;
const analysisPrice = 33.60;