function bubblesort(arr){
    let swapped;
    for(let pass=1;pass<arr.length;pass++){
        swapped=false;
        for(let i=0;i<arr.length-pass;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true;
            }
        }
        if(!swapped) break; 
    }
}
const array= [1,2,3,7,5,6];
bubblesort(array);
console.log('Result',array)

//output:-
// Result [1, 2, 3, 5, 6, 7]

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Best Case: O(n)
// Worst Case: O(n^2)
// Average Case: O(n^2)
// Stable Sort: Yes
// In-place Sort: Yes
// Adaptive Sort: Yes
// Comparison Sort: Yes
// Non-comparison Sort: No
// Online Sort: No
// Offline Sort: Yes
// Recursive Sort: No
// Iterative Sort: Yes
// Parallel Sort: No
// External Sort: No
// Internal Sort: Yes
// Memory Usage: O(1)
// Auxiliary Space: O(1)
// Cache Performance: O(1)
// Data Structure: Array
// Algorithm: Comparison Sort
// Implementation: Iterative
// Complexity Analysis: O(n^2)

