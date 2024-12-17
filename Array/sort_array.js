//
const array=[3,5,7,9,5,2,0]; //sorting [array] by small num to big num
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
        if (array[j] > array[j+1]) {
            let temp= array[j];
            array[j]=array[j+1] ;
            array[j+1]=temp;
        };  
    }
}
array.sort();