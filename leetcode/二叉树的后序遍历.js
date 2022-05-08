/**
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
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
const postorderTraversal = function (root) {
  const stack = [];
  const res = [];
  let node = root;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      if (node.left) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    node = stack.pop();
    res.push(node);
    if (stack.length > 0 && stack[stack.length - 1].left === node) {
      node = stack[stack.length - 1].right;
    } else {
      node = null;
    }
  }
  return res;
};
