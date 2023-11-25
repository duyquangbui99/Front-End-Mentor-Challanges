//Given is an array numbers with integers. Return true if a zero is next to a zero or a four is next to a four. Return false if both occure.

//solution
function myFunction(numbers) {
    var hasFourFour = false;
    var hasZeroZero = false;

    for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 4 && numbers[i + 1] === 4) {
            hasFourFour = true;
        } else if (numbers[i] === 0 && numbers[i + 1] === 0) {
            hasZeroZero = true;
        }
    }

    if (hasFourFour == hasZeroZero) {
        return false
    } else {
        return true
    }
}