// Minimum Increment to Make Array Unique


// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

// Return the minimum number of moves to make every value in nums unique.







/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    
    nums.sort((a,b) => a-b)

    let moves  = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= nums[i - 1]){
            let increment = nums[i - 1] - nums[i] + 1;
            nums[i] += increment;  // Apply the increment to nums[i]
            moves += increment;
        }
    }

    return moves 
};