module.exports = function toReadable(number) {
    const numberNames = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }
    const linearCombination = getLinearCombination(number);
    let str = '';
    for (let i = 0; i < linearCombination.length; i++) {
        if (!str) {
            str += `${numberNames[linearCombination[i]]}`;
        } else if (linearCombination[i] == 0 && linearCombination.length != 1) {
            continue;
        } else {
            str += ` ${numberNames[linearCombination[i]]}`;
        }
    }
    return str;
}

function getLinearCombination(number) {
    number = number.toString(10);
    let linearCombination = [];
    for (let i = 0; i < number.length; i++) {
        linearCombination.push(number[i] * Math.pow(10, number.length - 1 - i));
    }
    const length = linearCombination.length
    if (linearCombination[length - 2] == '10') {
        linearCombination[length - 2] = `${+linearCombination[length - 2] + +linearCombination.pop()}`
    } else if (linearCombination[length - 1] == 0 && length != 1) {
        linearCombination.pop();
    }
    return linearCombination;
}

