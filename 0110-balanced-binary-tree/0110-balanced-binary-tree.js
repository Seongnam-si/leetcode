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
 * @return {boolean}
 */

/*
이진트리의 뎁스를 파악하는 문제
전체 트리에서 좌우의 각 부모 노드하위 자식 노드의 깊이가 1단계인경우까지는 true이나
2단계 이상 차이가 나면 false를 반환
ex ) 
   3
  9 20
15 7
=> true
	1
   2 2
  3 3
 4
=> false

하위 노드로 내려가면서 계속 좌우의 깊이를 파악해야하니깐 깊이 계산 함수를 반복 호출
*/
var isBalanced = function(root) {
    let isResult = true;

  const checkDepth = (root) => {
    if (root === null) return 0;

    let leftNode = checkDepth(root.left);
    let rightNode = checkDepth(root.right);
    let depth = Math.abs(leftNode - rightNode);

    if (depth > 1) {
      isResult = false;
    }

    return (
        Math.max(leftNode, rightNode) + 1
    );
  }

  checkDepth(root);
  return isResult;
};