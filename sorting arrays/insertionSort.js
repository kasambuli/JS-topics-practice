const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(nums)
            if (nums[i] < nums[j]) {
                const spliced = nums.splice(i, 1)//splice takes out something out of an array
                nums.splice(j, 0, spliced[0]);
            }
        }
    }
}
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
insertionSort(nums);
//Big O is On^2