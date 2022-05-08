/**
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dpMap = new Map();
  const dp = (n) => {
    if (dpMap.has(n)) return dpMap.get(n);
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Number.MAX_VALUE;
    for (let i = 0; i < coins.length; i++) {
      const sub = dp(n - coins[i]);
      if (sub === -1) continue;
      res = Math.min(res, 1 + sub);
    }
    dpMap.set(n, res);
    return res === Number.MAX_VALUE ? -1 : res;
  };
  return dp(amount);
};
console.log(coinChange([1, 2, 5], 11));
