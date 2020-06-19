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