/**
 * write a recursive function called "capitalizeWords" . Given an array of words, return a new array containing each word 
 * capitalized.
 */


/**
* My Solution 1- By Combining arrays with concat
*/
function capitalizeWords(array) {
    if (array.length == 1) return [array[0].toUpperCase()];
    return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1))); 
}

/**
 * My solution 2- By Combining arrays with concat
 */
function capitalizeWords2(array) {
    if (array.length == 1) return [array[0].toUpperCase()];
    let res = capitalizeWords2(array.slice(0, -1));
    res.push(array[array.length-1].toUpperCase());
    return res;
}

console.log(capitalizeWords2(['sumeet','sood','rahul']));

/**
 * Course Solution
 */
 function capitalizeWords3(array) {
   if (array.length === 1) {
     return [array[0].toUpperCase()];
   }
   let res = capitalizeWords3(array.slice(0, -1));
   res.push(array.slice(array.length - 1)[0].toUpperCase());
   return res;
 }

 console.log(capitalizeWords3(["sumeet", "sood", "rahul"]));