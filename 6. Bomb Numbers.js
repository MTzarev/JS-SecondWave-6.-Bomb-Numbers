function bombNumbers(nums, commands) {
    let specialNum = commands[0];
    let power = commands[1];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === specialNum) {
            let start = Math.max(0, i - power);
            let count = power * 2 + 1;

            nums.splice(start, count);
            i=i-power-1;
        }
    }
    let sum = 0;
    for (let toSum of nums) {
        sum += toSum;
    }
   // console.log(nums);
    console.log(sum);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
