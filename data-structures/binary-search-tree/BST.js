

export function BinaryTree(root = null) {
    this.root = root;
}

BinaryTree.prototype.height = function () {
};

BinaryTree.prototype.inOrderTraverse = function (callback) {
};

/**
 *
 * @param data
 * @param left TreeNode | null
 * @param right TreeNode | null
 * @constructor
 */
export function TreeNode(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}
