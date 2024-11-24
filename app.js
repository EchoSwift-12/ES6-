// try-catch method\

// try{
//  console.log(hello);
// }
// catch(error){
//     console.warn("an error occured");
//     console.log("an error");
//     console.error("an error occured");

// }

// Throwing Custom Errors
// const  divide  =  (a, b) =>{
//  if(b == 0){
//     throw new Error("/nCannot divide with zero");
//  }
//  return a/b;
// }
// try{
//  console.log(divide(10, 0));
// }
// catch(err) {
// console.log("opps! Error", err.message);
// }

// Finally
// try {
// console.log("Trying..");
// throw new Error("opps!...");
// }

// catch(e){
//  console.log("Caught an error", e.message);
// }

// finally{
//     console.log("Finally block always runs.");
// }


// Task
const func = (a, b) =>{
    if(b == 0){
        throw new Error("ERROR DETECTED");
    }
    return a/b;
}

try {
    console.log(func(2, 0));
}
catch (err){
    console.log("b is zero", err.message);
}

func();
// output: b is zero ERROR DETECTED

