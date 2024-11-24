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

    //  Error handling best practices
// using .catch() at the end of oyur promise chain to catch all errors
doSomething()
    .then(() => doAntherThing())
    .catch((error => console.log("An error Occured:", error)))

// if inside async/await, always wrap in the try-catch al errors
const order =  async() => {
try{
const user = await fetchUser();
const posts = await fetchPosts(user.id);
console.log(posts);
}
catch(error){
console.log(error);
}
}
order();

