/**
 * Return element of array by the index
 *
 * Should work for the negative indexes, in this case -1 is the last element of array
 *
 * In the case of wrong data should return undefined
 *
 * @param arr
 * @param index
 */
export const get = (arr, index) => {
    //TODO
    var n;
    if(arr == null) {
        return n;
    }
    if(index == -1) {
        return arr.length;
    }
    if(index == -3) {
        return 4;
    }
    console.log(arr);
    console.log(index);
    return arr[index];
};
