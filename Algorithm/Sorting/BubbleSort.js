// function bubbleSort (arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr;
// }

//if the array is almost sorted , add a noSwap flag to avoid repetitive sorting for sorted values

function bubbleSort(arr) {
  let noSwap;
  for (let i = 0; i <arr.length; i++) {
    noSwap =true
    for (let j =0; j <arr.length;j++) {
      if(arr[j]> arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return arr
}

console.log(bubbleSort([3,1,5,10,12,2]))