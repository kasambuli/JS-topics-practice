const quickSort = nums => {
    if (nums.length <= 1)
        return nums;
    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        }
        else {
            right.push(nums[i])
        }
    }
    console.log([...quickSort(left), pivot, ...quickSort(right)])
    return [...quickSort(left), pivot, ...quickSort(right)]

}
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
quickSort(nums);