// receives a function
function receivesAFunction(myFunction) {
  myFunction();
}

// named function
function returnsANamedFunction() {
  return function namedFunction() {};
}

// anonymous function
function returnsAnAnonymousFunction() {
  return () => console.log("This is an anonymous function.");
}
