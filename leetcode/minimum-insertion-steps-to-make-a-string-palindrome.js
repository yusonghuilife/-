/**
 * @param {string} s
 * @return {number}
 * 动态规划
状态dp[i][j]：表示s[i...j]的最大回文子序列长度

状态转移方程：若s[i]==s[j],则dp[i][j]=dp[i+1][j-1]+2，表示若s[i]==s[j]相等，那么它们俩的长度加上 s[i+1..j-1] 中的最长回文子序列就是 s[i..j] 的最长回文子序列；
            若s[i]!=s[j]，则dp[i][j]=max(dp[i][j-1],dp[i+1][j])，表示若s[i]!=s[j]，那么把它们两分别加入 s[i+1..j-1] 中，看看哪个子串产生的回文子序列更长即可。

注意：我们需要从后往前遍历，因为每一个dp[i][j]取决于它前面的最大回文子序列长度

初始化：dp[i][i]=1，表示单个字符的回文长度为1
 */
const minInsertions = function (s) {
  // 左下到右上，保证计算dp[i][j]时，dp[i + 1][j]、dp[i][j - 1]均已计算过
  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j <= len - 1; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i + 1][j]) + 1;
      }
    }
  }
  return dp[0][len - 1];
};
