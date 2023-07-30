function findEvenIndex(arr) {
  for (let index = 0; index < arr.length; index++) {
    let frontSum = 0;
    let backSum = 0;

    // Berechne die Summe der Elemente vor und nach dem aktuellen Index gleichzeitig
    for (let i = 0, j = arr.length - 1; i < index || j > index; i++, j--) {
      if (i < index) {
        frontSum += arr[i];
      }
      if (j > index) {
        backSum += arr[j];
      }
    }

    // Überprüfe, ob die Summen gleich sind und gib den Index zurück
    if (frontSum === backSum) {
      return index;
    }
  }

  return -1; // Kein Gleichgewichtspunkt gefunden
}


console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");