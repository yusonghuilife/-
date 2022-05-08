/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

示例 2：

输入：digits = ""
输出：[]

示例 3：

输入：digits = "2"
输出：["a","b","c"]

提示：

0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };

const letterCombinations = (digits) => {
  if (digits.length === 0) return [];
  const res = [];
  // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
  const dfs = (curStr, i) => { // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) { // 指针越界，递归的出口
      res.push(curStr); // 将解推入res
      return; // 结束当前递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应的字母
    for (const letter of letters) { // 一个字母是一个选择，对应一个递归分支
      dfs(curStr + letter, i + 1); // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
    }
  };
  dfs('', 0); // 递归的入口，初始字符串为''，从下标0开始翻译
  return res;
};

const letterCombinations1 = (digits) => {
  if (digits.length === 0) return [];
  const queue = [];
  queue.push('');
  for (let i = 0; i < digits.length; i++) { // bfs的层数，即digits的长度
    const levelSize = queue.length; // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) { // 逐个让当前层的节点出列
      const curStr = queue.shift(); // 出列

      const letters = map[digits[i]];

      for (const l of letters) {
        queue.push(curStr + l); // 生成新的字母串入列
      }
    }
  }
  return queue; // 队列中全是最后一层生成的字母串
};

console.log(letterCombinations1([2, 3]));
// [
//   'ad', 'ae', 'af',
//   'bd', 'be', 'bf',
//   'cd', 'ce', 'cf'
// ];
