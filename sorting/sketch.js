// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let array = [0,0,1,1,1,2,3,4,5,6,7,8,,10,14,167];

function setup() {
 noCanvas();
 noLoop();
}

function draw() {
  print(unsortedArray);
  //sort();
  print(unsortedArray);
}

function sort() {
  for (let i=0;i<unsortedArray.length-1;i++) {
    let num = unsortedArray[i];
    let numLocation = i;
    for (let j=i+1;i<unsortedArray.length;j++) {
      let cur = unsortedArray[j];
      if (cur < num) {
        let 
        num = cur
        numLocation = j
      }
    }
    let temp = unsortedArray[i];
    unsortedArray[i] = unsortedArray[numLocation];
    unsortedArray[numLocation] = num;
  }
}

function binarySearch() {
  let n = 6
  while  (values.length > 1);
    let index = int(array.length/2);
    if (array[index]===n) {
      return true
    }
    else {
      if (array[index]>n) {
        array.splice(n);
      }
      else {
        array.splice(0,int(array.length/2));
      }
    }
  return false;     
}