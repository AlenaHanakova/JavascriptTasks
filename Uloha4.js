function selectionSort(array){
    let iMin;
    for (let i = 0; i < array.length-1 /1; i++) {
        iMin=array[i];
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < iMin) iMin=j;
        }
        (i!=iMin) && swapTwoElementsInArray(array, i, iMin);  
    }       
    return array;
}

function swapTwoElementsInArray(array, i1, i2){
    [array[i1], array[i2]] = [array[i2], array[i1]];
}

function bubbleSort(array){
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            (array[i] > array[j]) && swapTwoElementsInArray(array, i, j);
        }        
    }
    return array;
}

// function mergeSort(array){

// }


testArray = [3,6,2,1,7,9,8,5,4,1];
console.log(`selectionSort ${selectionSort(testArray)}`);
testArray = [3,6,2,1,7,9,8,5,4,1];
console.log(`bubbleSort ${bubbleSort(testArray)}`);