//informazioni lette dal dom
const workSelection = document.getElementById('work-selection');
const finalPriceBefore = document.getElementById ('final-price-before');
const finalPriceAfter = document.getElementById ('final-price-after');
const promoCode = document.getElementById ('promo-code');
const showPrice = document.getElementById ('show-price');
const workSelectionErr = document.getElementById ('work-selection-error')
const promoInputErr = document.getElementById ('promo-input-error')
const promoCodes = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"]

const button = document.getElementById ('form-button');


//calcolo del prezzo

button.addEventListener("click", function (event) {

    event.preventDefault();

    //calcolo prezzo standard

    const index = workSelection.selectedIndex;

    let price = ''+'';

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
        workSelectionErr.textContent = 'Tipo di lavoro non selezionato!'
    }

    console.log(price)

    //controllo codici sconto

    if (promoCodes.includes(promoCode.value))
        price = price - ((price * 25) / 100);
    else
        console.log("codice sconto non riconosciuto");
        promoInputErr.textContent = 'Codice sconto non valido!'

    // Separazione del prezzo

    let priceStr = price.toString();
    console.log(price);
    const pricePart = priceStr.split(".");

    // Non mostrare la virgola se non ci sono decimali

    if (pricePart[1]>0) {
        finalPriceAfter.classList.remove('d-none');
    }

    // Inserimento delle parti del prezzo negli elementi

    finalPriceBefore.textContent = pricePart[0];
    finalPriceAfter.textContent = pricePart[1];

    showPrice.classList.remove('d-none');

})



// variabili utili per il calcolo del prezzo
const timeCount = 10;
const backendPrice = 20.50;
const frontendPrice = 15.30;
const analysisPrice = 33.60;