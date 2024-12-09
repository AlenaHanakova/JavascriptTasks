export { };

function polSum(pol1: number[], pol2: number[]): number[] {
    if (pol1.length > pol2.length) [pol1, pol2] = [pol2, pol1];
    let result = [...pol2];
    for (let i = 0; i < pol1.length; i++) {
        result[i] += pol1[i] + pol2[i];
    }
    return result;
}

function countForX(pol: number[], x: number): number {
    console.log(pol, x, pol.length);
    let result = 0;
    for (let i = 0; i < pol.length; i++) {
        result += pol[i] * Math.pow(x, i);
    }
    return result;
}

function polMul(pol1: number[], pol2: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < (pol1.length + pol2.length - 1); i++) {
        result[i] = 0;
    }
    for (let i1 = 0; i1 < pol1.length; i1++) {
        for (let i2 = 0; i2 < pol2.length; i2++) {
            result[i1 + i2] = pol1[i1] * pol2[i2];
        }
    }
    return result;
}


//12.49
console.log(countForX([1, 2.5, 3.5, 0, 5.4], 1));
//Sum([1, 2, 5], [2, 0, 1, -7]) vrátí [3, 2, 6, -7]
console.log(polSum([1, 2, 5], [2, 0, 1, -7]));
//Multiply([1, 2, 5], [2, 0, 1, -7]) vrátí [2, 4, 11, -5, -9, -35]
console.log(polMul([1, 2, 5], [2, 0, 1, -7]));