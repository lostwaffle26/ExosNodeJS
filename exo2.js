function add(numberToAdd) {
    console.log('valeur de "numberToAdd" : ' + numberToAdd);

    const numbers = numberToAdd.split(',');
    console.log('valeur de "numbers" : ', numbers);

    if (numberToAdd === '') {
        return '0';
    }
    else {
        if (numbers.length > 1) {

            // addResult = parseInt(numbers[i], 10);
             
            let addResult = numbers.reduce(function (acc, current) {
                return acc = parseInt(acc, 10) + parseInt(current, 10);
            })

            for (let i = 0; i < numbers.length; i = i + 1) {
                addResult = addResult + parseInt(numbers[1], 10);
            }

            return addResult;
        }
        else {
            return addResult;
        }
    }
}

const result = add('1, 2');

console.log('result : ' + result);