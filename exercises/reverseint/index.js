// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    // if ( n > 0 )
    //     return n.toString().split('').reverse().join('');
    // else {
    //     let ret = n.toString().split('').reverse().join('').substr(n.length-1, 1);
    // }
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;