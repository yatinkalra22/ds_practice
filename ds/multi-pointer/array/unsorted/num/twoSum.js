const twoSum = function (nums, target) {
  if (target < 1) return [];
  if (!nums[0]) return [];

for(let i=0;i<nums.length; i++) {
  if(nums[i] > target) nums.splice(i, 0, nums[i])
}
  console.log("nums: ", nums);
};

console.log(twoSum([3, 2, 3,10], 9));
