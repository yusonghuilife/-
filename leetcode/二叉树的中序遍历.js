/**
给你一棵二叉树的根节点 root ，返回其节点值的 中序遍历 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let node = root;
  while (node || stack.length > 0) {
    if (node) {
      // 先加入所有左节点
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      res.push(node.val); // log
      node = node.right; // 递归右子节点
    }
  }
  return res;
};
