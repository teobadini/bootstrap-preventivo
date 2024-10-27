//informazioni lette dal dom
const workSelection = document.getElementById('workSelection')
const finalPriceBefore = document.getElementById ('final-price-before')
const finalPriceAfter = document.getElementById ('final-price-after')
const promoCode = document.getElementById ('promo-code')

const buttonFormSend = document.getElementById ('form-button')



// variabili utili per il calcolo del prezzo
const timeCount = 10;
const backendPrice = 20.50;
const frontendPrice = 15.30;
const analysisPrice = 33.60;