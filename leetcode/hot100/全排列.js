/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

提示：
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

https://leetcode-cn.com/problems/permutations
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        dfs([...path, nums[i]]);
      }
    }
  };
  dfs([]);
  return res;
};

const permuteWithVisit = (nums) => {
  const used = []; // 是否遍历过
  const res = [];
  const path = [];
  const dfs = () => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs();
      used[i] = false;
      path.pop(); // pop出来保证下一次遍历path长度不变
    }
  };
  dfs();
  return res;
};

console.log(permuteWithVisit([1, 2, 3]));
