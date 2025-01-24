function getPermutations(array) {
    if (array.length <= 1) { return array; };
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // pole prvku ktere neobsahuji prvek na pozici i - aby se neopakoval
        let otherElements = array.slice(0, i).concat(array.slice(i + 1, array.length));
        //vlozim vsechny mozne permutace zacinajici ar[i] a koncici vsemi permutacemi zbylych prvku
        getPermutations(otherElements).forEach(element => {
            result.push([array[i]].concat(element));
        });
    }
    return result;
}

console.log(getPermutations([1, 2, 3]));
console.log(getPermutations(['a', 'b', 'c']));
