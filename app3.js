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
    .catch((result) => {
        // console.log("rejected");
    })

// Real life Example    
const fetchData = new Promise((resolve, reject) => {
    let dataLoaded = false;

    setTimeout(() => {
        if (dataLoaded) {
            resolve("Data fetched!");
        }
        else {
            reject("Failed to fetch data!");
        }
    },
        2000);
})

fetchData
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
