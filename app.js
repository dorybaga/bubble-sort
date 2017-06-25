var bubble = [65, 23, 79, 64, 49, 77, 6];

function bubbleSort(arr){
  var swap;

  for (var i = 0; i < bubble.length; i++){
    if (arr[i] < arr[i+1]){
      swap = false;
    } else if (arr[i] > arr[i+1]){
      swap = true;
      // console.log('this is arr[i] ', arr[i]);
      var temp = arr[i+1];
      // console.log('this is arr[i+1] ', temp);
      arr[i+1] = arr[i];
      // console.log('this is new arr[i+1]', arr[i+1]);
      arr[i] = temp;
      // console.log('this is new arr[i]', arr[i]);
    }
    return arr;
  }
}

bubbleSort(bubble); // should return the sorted array
console.log(bubbleSort(bubble));