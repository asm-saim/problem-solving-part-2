function isSame(arr1, arr2) {
    if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
        return "Invalid";
    }
    // if (arr1.length !== arr2.length) {
    //     return false;
    // }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
            return false;
        }
    }
    return true; 
}
const result = isSame([1, 5, 5], [1, 4, 5]);
console.log(result);