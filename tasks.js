// // Task 1: Simple Promise
// // Create a promise that simulates an asynchronous task (e.g., fetching a user's data).
// //  The task should randomly succeed or fail after 2 seconds. 
// // Use .then() and .catch() to handle the result.

// const fetch = new Promise((resolve, reject) => {
//     const isSuccessful = Math.random() > 0.5;
//     setTimeout(() => {
//         if (isSuccessful) {
//             resolve("successfully fetched");
//         }
//         else {
//             reject("failed to reject");
//         }
//     }, 2000);
// })
// fetch
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// fetch;

// // Task 2: Promise Chaining
// // Create three promises that simulate different stages of a process 
// // (e.g., order placing, order processing, and order shipping). 
// // Chain them together using .then(). If any promise fails, 
// // catch the error and display an error message.

// const chaining = new Promise((resolve, reject) => {
//     let resolves = math.random > 0.5; //simulate random success/failure
//     setTimeout(() => {
//         if (resolves)
//             resolve("order placing");
//         else
//             reject("your order is rejected");
//     }, 1000);
// })
// chaining
//     .then((message) => {
//         console.log(message);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("order processing");
//             }, 1000);
//         })
//     })

//     .then((message) => {
//         console.log(message);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("order shipping");
//             }, 1000);
//         })
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// chaining;

// // method 2
// const placeOrder = () => {
//     Promise.resolve("Order Placed");
// }
// const processOrder = () => {
//     Promise.resolve("Order Processed");
// }
// const shipOrder = () => {
//     Promise.resolve("Order Shipped");
// }
// placeOrder()
//     .then((message) => {
//         console.log(message);
//         return processOrder();
//     })
//     .then((message) => {
//         console.log(message);
//         return shipOrder();
//     })
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// // Task 3: Using Promise.all
// // You have two asynchronous tasks: one to fetch a list of users and another to fetch a list of posts.
// //  Use Promise.all to execute both promises simultaneously and log the results when both are fulfilled.

// const fetchListUsers = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("list of users fetched");
//     }, 1500);
// })

// const fetchListPost = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("list of posts fetched");
//     }, 2000);
// })

// Promise.all([fetchListUsers, fetchListPost])
//     .then((message) => {
//         console.log("all tasks completed");
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log("an error occurred", error);
//     });

// //  Task 4: Fetch API with Promises
// //  Write a function that fetches data from a public API 
// //  (like JSONPlaceholder) and logs the fetched data to the console. 
// //  Handle any errors that occur during the fetch using .catch().

// const fetchAPI = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTPS error! Status: ${response.status}`);
//             }
//             return response.json();
//         })

//         .then((message) => {
//             console.log("fetched data", message);
//         })
//         .catch((error) => {
//             console.log("Error Occurred", error);
//         });
// }
// fetchAPI;

// // Task 5: Implement Promise.allSettled
// // Create two promises: one that resolves and another that rejects.
// //  Use Promise.allSettled() to wait for both promises to finish and log their results.

// const fulfil = Promise.resolve("Rsolved promise");
// const reject = Promise.reject("rejects promise");
// Promise.allSettled([fulfil, reject])
//     .then((results) => {
//         console.log(results);
//     })

// // Task 6: Error Handling in Chaining
// // Write a promise chain with multiple .then() calls. 
// // In one of the .then() calls, simulate an error by rejecting the promise. 
// // Use .catch() to handle the error and log it to the console.
// const promiseChain = Promise.resolve("start")
//     .then((result) => {
//         console.log(result);
//         return "step1";
//     })
//     .then((result) => {
//         console.log(result);
//         throw new Error("Something went wrong");
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("error caught", error.message);
//     })

// //  Task 7: Delay Function with Promises
// //  Write a function delay(ms) that returns a promise which resolves 
// //  after a given number of milliseconds.
// // Test it by delaying a console.log message for 2 seconds.

// const delay = (ms) => {
//     return new Promise((resolve) =>
//         setTimeout(resolve, ms));
// }
// delay(2000)
//     .then(() => {
//         console.log("message delayed for 2 seconds");
//     })

// // Task 8: Timer Using Promises
// // Use a setTimeout inside a promise to simulate a timer. 
// // The promise should resolve after 3 seconds with a message, 
// // and the result should be logged using .then().    

// function timer() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("timer completed");
//         }, 3000);
//     })
// }
// timer().then((message) => {
//     console.log(message);//timer completed
// })

// Task 9: Fetch Data with Dynamic URL
// Write a promise-based function that accepts a dynamic URL as a parameter
//  and fetches data from that URL. 
// Log the data if the fetch is successful or an error if it fails.

// fetching data with dynamic URL

function fetchData(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Fetched data: ", data);
        })
        .catch((error) => {
            console.log("Error: ", error.message);
        });
}
fetchData("https://jsonplaceholder.typicode.com/posts/5");

// Task 10: Using finally
// Write a promise chain that simulates an async task. 
// Make sure to add a .finally() block that logs "Operation Complete!" 
// regardless of whether the promise was fulfilled or rejected

const final = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        success ? resolve("resolved") : reject("rejected");
    }, 3000);
})

    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("operation completed");
    });
    
final;