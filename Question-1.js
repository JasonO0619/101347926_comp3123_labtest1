// Create a script with a function named lowerCaseWords that takes a  mixed array as input. 
// The function will do the following.
// o return a promise that is resolved or rejected
// o filter the non-strings and lower case the remaining words

const lowerCaseWords = arr => {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(arr)){
            return reject("The input entered isn't an array");
        }
        resolve(arr.filter(item => typeof item === 'string')
                .map(item => item.toLowerCase())
        );
    });

}

lowerCaseWords(["PIZZA", 10, true, 25, false, 'Wings'])
.then(result => {
    console.log("Lowercased words:", result);
})
.catch(error => {
    console.error("Error:", error)
});