const methode = {

    add(numbers){
        const numbersArray = numbers.split(",");
        
        if (numbersArray.length > 2) {
            console.log("Pas plus de 2 nombres séparés par une virgule (,) sont autorisés");
        } 
        else {
          for (let number in numbersArray){
              parseInt(number);
          }
        }
    }
}

console.log(methode.add());