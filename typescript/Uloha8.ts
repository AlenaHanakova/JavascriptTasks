export { };
//best practice to have a function of (number|string)[] input and output?
function getPermutations(array: any[]): any[] {
    if (array.length <= 1) return array;
    let result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        let otherElements = array.slice(0, i).concat(array.slice(i + 1, array.length));
        getPermutations(otherElements).forEach(element => {
            result.push([array[i]].concat(element));
        });
    }
    return result;
}

console.log(getPermutations([1, 2, 3]));
console.log(getPermutations(["a", "b", "c"]));