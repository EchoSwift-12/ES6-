// Task 1: Simple Promise
// Create a promise that simulates an asynchronous task (e.g., fetching a user's data).
//  The task should randomly succeed or fail after 2 seconds. 
// Use .then() and .catch() to handle the result.

const fetch = new Promise((resolve, reject) => {
    const isSuccessful = Math.random() > 0.5;
    setTimeout(() => {
        if (isSuccessful) {
            resolve("successfully fetched");
        }
        else {
            reject("failed to reject");
        }
    }, 2000);
})
fetch
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
fetch;

// Task 2: Promise Chaining
// Create three promises that simulate different stages of a process 
// (e.g., order placing, order processing, and order shipping). 
// Chain them together using .then(). If any promise fails, 
// catch the error and display an error message.

const chaining = new Promise((resolve, reject) => {
    let resolves = math.random > 0.5; //simulate random success/failure
    setTimeout(() => {
        if (resolves)
            resolve("order placing");
        else
            reject("your order is rejected");
    }, 1000);
})
chaining
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("order processing");
            }, 1000);
        })
    })

    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("order shipping");
            }, 1000);
        })
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
chaining;

// Task 3: Using Promise.all
// You have two asynchronous tasks: one to fetch a list of users and another to fetch a list of posts.
//  Use Promise.all to execute both promises simultaneously and log the results when both are fulfilled.

const fetchListUsers = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("list of users fetched");
    }, 1500);
})

const fetchListPost = new Promise((resolve) => {
    setTimeout(() => {
        resolve("list of posts fetched");
    }, 2000);
})

Promise.all([fetchListUsers, fetchListPost])
    .then((message) => {
        console.log("all tasks completed");
        console.log(message);
    })
    .catch((error) => {
        console.log("an error occurred", error);
    });

//  Task 4: Fetch API with Promises
//  Write a function that fetches data from a public API 
//  (like JSONPlaceholder) and logs the fetched data to the console. 
//  Handle any errors that occur during the fetch using .catch().

const fetchAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTPS error! Status: ${response.status}`);
            }
            return response.json();
        })


    .then((message) => {
    console.log("fetched data", message);
})
    .catch((error) => {
        console.log("Error Occurred",error);
    });
}
fetchAPI;


