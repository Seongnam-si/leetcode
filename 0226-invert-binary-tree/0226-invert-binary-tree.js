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
 * @return {TreeNode}
 */

/*
문제
이진트리의 자식 노드들의 좌우를 반전시켜야 하는 문제
ex)
입력 [4, 2, 7, 1, 3, 6, 9]
출력 [4, 7, 2, 9, 6, 3, 1]
입력 [2, 1, 3]
출력 [2, 3, 1]
입력 []
출력 []

이진트리 구조를 이용한 문제
좌우의 자식노드를 반복 호출하며 스왑해준다.

고려할건 좌우의 위치를 변경하는 타이밍
*/
var invertTree = function(root) {
    if (root === null) return root;

    invertTree(root.left);
    invertTree(root.right);
    
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
    
};
