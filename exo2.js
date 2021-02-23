function add(numberToAdd) {
    console.log('valeur de "numberToAdd" : ' + numberToAdd);

    const numbers = numberToAdd.split(',');
    console.log('valeur de "numbers" : ', numbers);

    if (numberToAdd === '') {
        return '0';
    }
    else {
        if (numbers.length > 1) {
            const numberReadyToAdd = [];
            let addResult = 0;

            for (let i = 0; i < numbers.length; i = i + 1) {
                numberReadyToAdd.push(parseInt(numbers[1], 10));
            }

            for (let i = 0; i < numberReadyToAdd.length; i = i + 1) {
                addResult = addResult + numberReadyToAdd[1];
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