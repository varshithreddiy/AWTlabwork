function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}`);
      console.log(`Inner: ${innerVariable}`);
    };
  }
  
  const closureExample = outerFunction("Outer function call"); // This function returns another function which we again call.
  closureExample("Inner Function call");
