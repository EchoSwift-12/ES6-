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

const  divide  =  (a, b) =>{
 if(b == 0){
    throw new Error("Cannot divide with zero");
 }
 return a/b;
}
try{
 console.log(divide(10, 0));
}
catch(err) {
console.log("opps! Error", err.message);
}
