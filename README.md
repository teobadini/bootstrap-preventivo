Aggiungiamo la componente js di interazione con l’utente.

Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del
preventivo per le ore di lavoro richieste.

Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che
ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
Il prezzo orario per una commissione varia in questo modo:
● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
● se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
● se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32,
JANJC63, PWKCN25, SJDPO96, POCIE24.

Se l'utente non ha compilato il campo del codice sconto non controllo

Se l'utente ha compilato il campo del codice sconto e contiene uno dei codici indicati ---> Calcolo il codice sul totale
altrimenti l'utente ha compilato il campo del codice sconto e contiene NON uno dei codici indicati



Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul
prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice
non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale