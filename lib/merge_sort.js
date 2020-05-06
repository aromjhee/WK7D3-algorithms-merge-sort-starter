// function merge(array1, array2) {
//   // var result as array
//   const result = [];
//   // while ( a and b have elements )
//   //   if ( a[0] > b[0] )
//   //     add b[0] to the end of result
//   //     remove b[0] from b
//   //   else
//   //     add a[0] to the end of result
//   //     remove a[0] from a
//   //   end if
//   // end while
//   while (array1.length && array2.length) {
//     if (array1[0] > array2[0]) {
//       result.push(array2.shift());
//     } else {
//       result.push(array1.shift());
//     }
//   }
//   // while ( a has elements )
//   //   add a[0] to the end of result
//   //   remove a[0] from a
//   // end while
//   while (array1.length) {
//     result.push(array1.shift());
//   }
//   // while ( b has elements )
//   //   add b[0] to the end of result
//   //   remove b[0] from b
//   // end while
//   while (array2.length) {
//     result.push(array2.shift());
//   }
//   // return result
//   return result;
// }

function merge(array1, array2) {
  let merged = [];
  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;
    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }
    merged.push(next);
  }
  return merged;
}

function mergeSort(array) {
  // if ( n == 1 ) return a
  if (array.length <= 1) return array;
  // /* Split the array into two */
  // var l1 as array = a[0] ... a[n/2]
  // var l2 as array = a[n/2+1] ... a[n]
  let midPoint = Math.floor(array.length / 2);
  let l1 = array.slice(0, midPoint);
  let l2 = array.slice(midPoint)
  // l1 = mergesort( l1 )
  // l2 = mergesort( l2 )
  let leftSide = mergeSort(l1);
  let rightSide = mergeSort(l2);
  // return merge( l1, l2 )
  return merge(leftSide, rightSide);
}

module.exports = {
  merge,
  mergeSort
};
