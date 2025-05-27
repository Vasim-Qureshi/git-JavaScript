function binarySearch(arr, target) {
    arr.sort((a,b)=>a-b);
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) 
            return mid;
        else if (arr[mid] < target) 
            left = mid + 1;
        else 
            right = mid - 1
    }
    return -1;
}

console.log(binarySearch([1,4,2,7,9,5],6))
console.log(binarySearch([1,4,2,7,9,5],9))

// Time Complexity: O(log n)
// Space Complexity: O(1)
// Best Case: O(1)
// Worst Case: O(log n)
// Average Case: O(log n)

// output:-
// -1
// 5

const arrayPDF = "https://github.com/Vasim-Qureshi/SK-15-09-2024/blob/main/dsa/session-3-Array1/Array-basics.pdf"