selectionSort(array){
    if (array.length <= 1) return array;
    let iMin;
    for (let i = 0; i < array.length-1 /1; i++) {
        iMin=array[i];
        for (let j = i; j < array.length; j++) {
            if(array[j] < iMin) iMin=j;
        }
        if (i!=iMin)      
        [array[i], array[iMin]] = [array[iMin], array[i]];
        }      
    return array;
}

// bubbleSort(array){

// }

// mergeSort(array){

// }


testArray = [3,6,2,1,7,9,8,5,4,1];
console.log(selectionSort(testArray));