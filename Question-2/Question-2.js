// Given the script file callbacks.js, write a script that does the following:
// o Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
// o Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 
// 500ms.
// o Call both promises separately and handle the resolved and reject results and then output to the console

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = {'message': 'delayed success!'}
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            const e = {'error': 'delayed exception!'}
            reject(e);
        }, 500);
    });
};




resolvedPromise()
    .then(result => {
        console.log("Resolved:", result); 
    })
    .catch(error => {
        console.error("Error:", error);
    });

    rejectedPromise()
    .then(result => {
        console.log("Resolved:", result); 
    })
    .catch(error => {
        console.error("Error:", error.message); 
    });
