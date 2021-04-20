const bubbleSort = (nums) => {
    do {
        var swapped = false;
        for (let i = 0; i < nums.length; i++) {
            console.log(nums)

            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);
    console.log(nums)
}
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
bubbleSort(nums);