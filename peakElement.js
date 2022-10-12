
var findPeakElement = (arr) =>{
    var start = 0;
 var end = arr.length - 1;
  

 while (arr[start] < arr[end]) {
   var middle = Math.floor(start + (end - start) / 2);

   if (arr[middle] > arr[middle + 1]) {
     end = middle;
   } else {
     start = middle + 1;
   }
 }
 return arr[start];
};

const arr = [1,2,4,25,47,48,52,23,499];
const result = findPeakElement(arr);
console.log(result);
