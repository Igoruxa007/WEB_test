function even_or_odd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function sumTwoSmallestNumbers(numbers) {
    min1 = 10000000;
    min2 = 10000000;
    for (element in numbers){
        if (numbers[element] < min1){
            if (min1 < min2) {
                min2 = min1;
            }
            min1 = numbers[element];
        } else if (numbers[element] < min2) {
            min2 = numbers[element];
        }
    }
    return min1 + min2;
}


function sum (numbers) {
    let sum_of_numbers = 0
    for (let i in numbers){
        sum_of_numbers += numbers[i]
    }
    return sum_of_numbers
};


// var numbers = [15, 28, 4, 2, 43]
alert(sum([]));