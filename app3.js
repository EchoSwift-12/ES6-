const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (!success) {
        resolve("Task completed");
    }
    else {
        reject("Task Rejected");
    }
})
console.log(myPromise);

myPromise
    .then((result) => {
        console.log("Fulfilled");
    })
    .catch((result) =>{
        console.log("rejected");
    })