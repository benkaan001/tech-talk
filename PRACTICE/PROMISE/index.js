/**********************
promise(s): 
* allow us to write async code in an synronous fashion 
* the main purpose is to avoid the callback hell
* an object that you hope to receive at a future time
* are either Pending, Fulfilled, or Rejected
* immutable state: once leaves Pending status it is eiher fulfilled or rejected. No going back.
*********************************/

// the arguments we pass are actually functions themselves
const promise = new Promise((resolve, reject) => {
  // since they are functions we can just invoke them
  //   resolve('200');
  reject('500');
});

console.log(promise);
// to access the data that gets passed into the resolve, we need to pass another callback function
// into .then method to access that data. The convention is to name the parameter data.
promise.then((data) => console.log(data)).catch((error) => console.log(error));

// ______________ match a random number __________________ //

const number = 2;
let random = Math.floor(Math.random() * 5);

const myPromise = new Promise((resolve, reject) => {
  if (random === number) {
    resolve('It is your lucky day!');
  } else {
    reject('Wrong number! Come back and try it again!');
  }
});
myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
