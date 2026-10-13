

function capitalize(n) {
    return n[0].toUpperCase() + n.slice(1)
}

function reverseString(n) {
    return n.split("").reverse().join("")
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

function caesarCipher(str, n) {
    const strings = str.split("").map(char => {
        if (char >= "a" && char <= "z") {
            return String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
        } else if (char >= "A" && char <= "Z") {
            return String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
        } else {
           return char
        }
    });
    return strings.join("")
}

function analyzeArray(arr) {
    const sum = arr.reduce((sum, number) => sum + number, 0);
    const length = arr.length;
    const average =  sum / length;
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return {
        average,
        min,
        max,
        length
    }
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };