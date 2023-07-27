function digPow(n, p) {

  // n ist eine Zahl und muss erst in einen String umgewandelt werden
  const nStr = n.toString();
  
  // hier werden die Ergebnisse der Potenzierung gespeichert
  const calculation = [];

  // Schleife zur Berechnung der einzelen Zahlen, Potenzen und deren Ergebnissen
  for (let index = 0; index < nStr.length; index++) {

    // Zahlen von n einzeln ausgeben
    const digit = parseInt(nStr[index]);

    // die Zahlen jeweils mit p + index potenzieren
    const count = Math.pow(digit, p + index)
    
    // die Ergebnisse der Potenzierung in einem Array speichern um nachher darauf zugreifen zu können
    calculation.push(count);
  }

  // Ergebnis ausgeben
  // hier wird die Summe aller Ergebnisse gespeichert
  let sum = 0;

  // Schleife zur Berechnung der Summe der potenzierten Zahlen
  for (let index = 0; index < calculation.length; index++) {

    // Berechnung der Summe
    sum += calculation[index];
  }

  // herausfinden ob es eine Zahl gibt, die k ist
  const k = sum / n;

  // wenn eine solche Zahl existiert k ausgeben
  if (Number.isInteger(k)) {
    return k;
  }

  // wenn nicht -1 ausgeben
  else {
    return -1;
  }
}


console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);