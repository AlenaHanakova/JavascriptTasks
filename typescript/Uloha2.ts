export { };

function rotateArray(array: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[(i + n) % array.length];
    }
    return result;
}


let testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotateArray(testArray, 5));