// -------------- Basic Tasks-----------------
//1.Simple Await
//Write an async function that resolves a promise with the message "Hello, Async!". 
// Use await to get the result and log it to the console.
const asyncFunc = async () => {
    // the below line, creates a promise that resolves immediately 
    // with th value "Hello async!".
    const promise = Promise.resolve("Hello, async");
    // await promise waits for the promise to resolve and 
    // retrieves  its resolved value.
    const result = await promise;
    // the resolved value is stored in result
    console.log(result);
}
asyncFunc();

//2.Error Handling with try...catch
//Create a function that rejects a promise with an error message like "Something went wrong". 
// Use try...catch to handle the error.
async function tryCatchFunc() {
    try {
        result = await Promise.reject("Something went wrong!");
    }
    catch (error) {
        console.error("error:", error);
    }
}
tryCatchFunc();

//--------------- Intermediate Tasks----------------------
// Sequential Execution
// Write an async function that:
// Resolves a promise with "Step 1 completed!" and logs it.
// Waits for another promise to resolve with "Step 2 completed!" and logs it.
// Waits for a final promise to resolve with "Step 3 completed!" and logs it.
const asyncFunction = async () => {

    const step1 = await Promise.resolve("Step 1 Completed");
    console.log(step1);

    const step2 = await Promise.resolve("Step 2 completed");
    console.log(step2);

    const step3 = await Promise.resolve("Step 3 completed");
    console.log(step3);
}
asyncFunction();

// Fetch Data
// Use the fetch API with await to get data from
//  https://jsonplaceholder.typicode.com/posts.
// Parse the response as JSON and log the first post's title.
// Handle errors gracefully.

const fetchURL = async () => {
    data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const info = await data.json();
    console.log(info);
}
fetchURL()
    .then((message) => {
        console.log("done");
    })
    .catch((error) => {
        console.log("error:", error.message);
    });

// good method
// using try catch method with async await
async function fetchURL2() {
    try {
        data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        info = await data.json();
        console.log(info);
    }
    catch (error) {
        console.log("error", error.message);
    }
}
fetchURL2();

//---------------- Advanced Tasks-------------------
// Parallel Execution
// Create two promises:
// The first resolves after 2 seconds with "Promise 1 resolved".
// The second resolves after 3 seconds with "Promise 2 resolved".
// Use Promise.all with async/await to wait for both and log the results.
const prom1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise 1 resolved");
    }, 2000);
})

const prom2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise 2 resolved");
    }, 3000);
})

const waitForBoth = async () => {
    try {
        const results = await Promise.all([prom2, prom2]);
        console.log("results", results)
    }
    catch (error) {
        console.log("error:", error.message);
    }
}
waitForBoth();


// Delay Function
// Write a delay function that takes a number of milliseconds as an argument 
// and returns a promise that resolves after that delay.
// Use it in an async function to log "Start", wait 3 seconds, and then log "End".

async function delayFunc(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function run() {
    console.log("start");
    await delayFunc(3000);
    console.log("end");
}
run();
// ---------------Real-Life Scenario Tasks--------------
// ---Fetch Multiple Resources
// Fetch data from two APIs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// Use Promise.all to fetch them simultaneously 
// and log the number of users and posts.
async function fetchingMultipleResources() {
    try {
        const [users, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    return response.json();
                }),
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    return response.json();
                })
        ]);
        console.log(`number of users ${users.length}`);
        console.log(`number of posts ${posts.length}`);
    }
    catch (error) {
        console.log("error:", error);
    }
}
fetchingMultipleResources();
// number of users 10
//  number of posts 100

// Retry on Failure
// Write an async function that fetches data from an API.
// If the fetch fails, retry up to 3 times with a delay of 1 second between retries.
