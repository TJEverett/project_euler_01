export function fibonacci(max){
  let outputArray = [0, 1];
  for (let i = outputArray[outputArray.length - 1]; i <= max; i += outputArray[outputArray.length - 2]){
    outputArray.push(i);
  }
  return outputArray;
}