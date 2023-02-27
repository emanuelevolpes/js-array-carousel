<!-- Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. -->

MILESTONE 1:
- mi concentro sulla struttura inserendo ciò che mi serve nel file html: un contenitore con la mia immagine statica e le freccie 'up' e 'down';

MILESTONE 2:
- adesso posso integrare la mia struttura html con del codice javascript:
    - creo un array in cui inserisco tutte le mie immagini;
    - tramite un ciclo for scorro le immagini all'interno del mio array;
    - devo inserire o rimuovere una classe nel mio html tramite js per mostrare o nascondere le immagini;

MILESTONE 3:
- al click della freccia devo scatenare un evento: mostrare o nascondere l'immagine;