function getPrimeNumbers(limit) {
    let prime_numbers = [],
        in_between_divisor;
    for (let i = 2; i < limit; i++) {
        in_between_divisor = false;
        for (let j = 2; j <= i; j++) {
            if (in_between_divisor) {
                break;
            }
            if (j != 1 && j != i) {
                if (i % j == 0) {
                    in_between_divisor = true;
                }
            }
        }
        if (in_between_divisor == false) {
            prime_numbers.push(i);
        }
    }
    console.log(prime_numbers);
}

getPrimeNumbers(200);

function getMaximalPairwiseRelativelyPrimeSubset(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//getMaximalPairwiseRelativelyPrimeSubset([15, 17, 21, 32, 169]);