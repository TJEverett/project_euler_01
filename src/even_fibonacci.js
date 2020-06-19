export function fibonacci(max){
  let outputArray = [0, 1];
  for (let i = outputArray[outputArray.length - 1]; i <= max; i += outputArray[outputArray.length - 2]){
    outputArray.push(i);
  }
  return outputArray;
}

export function divisorFilter(divisor, arrayStart){
  let outputArray = [];
  for(let i = 0; i < arrayStart.length; i++){
    if ((arrayStart[i] % divisor) === 0){
      outputArray.push(arrayStart[i]);
    }
  }
  return outputArray;
}

export function arrayAddition(arrayStart){
  let output = 0;
  for(let i = 0; i < arrayStart.length; i++){
    output += arrayStart[i];
  }
  return output;
}

export function fibonacciSum(max, divisor){
  const fibonacciArray = fibonacci(max);
  const dividedArray = divisorFilter(divisor, fibonacciArray);
  const sum = arrayAddition(dividedArray);
  return sum;
}