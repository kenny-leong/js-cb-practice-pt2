/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj2) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj3) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj1) // 3



***********************************************************************/


// solution1 (longer way of splicing out the commas and dashes)

// const miahsCats = obj => {
//     let keysAndValues = Object.values(obj)
//     let lowerCase = [];

//     keysAndValues = keysAndValues.concat(Object.keys(obj))

//     keysAndValues.forEach(element => {
//         let charList = element.split('');
//         for (i=0;i<charList.length;i++) {
//             if (charList[i]==='-' || charList[i]===',') {
//                 charList.splice(i,1, ' ');
//             }
//         }

//         charList = charList.join('')
//         let split = charList.toLowerCase().split(' ');

//         split.forEach(word => {
//             lowerCase.push(word)
//         });
//     });

//     let counter = 0;
//     for(i=0;i<lowerCase.length;i++) {
//         if (lowerCase[i].includes('adorable') || lowerCase[i].includes('cute')) {
//             counter++;
//         }
//     }
//     return counter;
// }

// faster version with keyArr and valuesArr
const miahsCats = obj => {

    let cuteCounter = 0;
    let keysArr = Object.keys(obj);
    let valuesArr = Object.values(obj);

    for (let key of keysArr) {
        let lowerKey = key.toLowerCase();
        if (lowerKey.includes('cute') || lowerKey.includes('adorable')) {
            cuteCounter++;
        }
    }
    for (let value of valuesArr) {
        let lowerValue = value.toLowerCase();
        if (lowerValue.includes('cute') || lowerValue.includes('adorable')) {
            cuteCounter++;
        }
    }
    return cuteCounter;
}






obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}

miahsCats(obj1) // 2


miahsCats(obj2) // 3


miahsCats(obj3) // 3



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}
