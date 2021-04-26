const mergeSort = (nums) => {
    if (nums.length < 2) {
        return nums
    }
    const len = nums.length;
    const middle = Math.floor(len / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return stitch(mergeSort(left), mergeSort(right));
};
const stitch = (left, right) => {
    const results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift())
        }
        else {
            results.push(right.shift())
        }
    }
    // while (left.length) {
    //     results.push(left.shift());
    // }
    // while (right.length) {
    //     results.push(right.shift());
    // }
    // return results;
    console.log([...results, ...left, ...right])
    return [...results, ...left, ...right]

}
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
mergeSort(nums);