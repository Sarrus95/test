function contaA(stringa: string): number {
  let conteggio = 0;
  for (const carattere of stringa) {
    if (carattere.toLowerCase() === "a") {
      conteggio++;
    }
  }
  return conteggio;
}

// Esempio di utilizzo
const risultato = contaA("La pizza è fantastica!");
console.log(`Numero totale di 'a': ${risultato}`);


// cosa nuova !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Noemi è bionda 
