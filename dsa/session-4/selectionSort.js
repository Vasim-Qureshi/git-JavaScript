function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; //smallest element index first

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j
        }
        if (minIndex !== i)
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

const arr = [20, 12, 10, 15, 2]
selectionSort(arr)
console.log('Result: ',arr)
const selectionSortPDF = "https://github.com/Vasim-Qureshi/SK-15-09-2024/blob/main/dsa/session-4-Array2/Sorting%20Algorithm.pdf"