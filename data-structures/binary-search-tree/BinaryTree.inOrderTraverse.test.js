import {BinaryTree, TreeNode} from './BST';

describe('[Binary Tree] inOrderTraverse', () => {
    it('test 0', () => {
        const binaryTree = new BinaryTree();

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls.length).toEqual(0);
    });

    it('test 1', () => {
        const binaryTree = new BinaryTree();

        const root = new TreeNode(1);

        binaryTree.setRoot(root);

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls).toEqual([[1]]);
    });

    it('test 2', () => {
        const root = new TreeNode(1);

        root.left = new TreeNode(2);

        const binaryTree = new BinaryTree(root);

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls).toEqual([[2], [1]]);
    });

    it('test 3', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3,
                    new TreeNode(4),
                    new TreeNode(5,
                        new TreeNode(6))))
        );

        const binaryTree = new BinaryTree(root);

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls).toEqual([[4], [3], [6], [5], [2], [1]]);
    });

    it('test 4', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(3,
                    new TreeNode(4,
                        null,
                        new TreeNode(6,
                            new TreeNode(7,
                                new TreeNode(8,
                                    new TreeNode(9))))
                    ),
                    new TreeNode(5)
                )
            )
        );

        const binaryTree = new BinaryTree(root);

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls).toEqual([[2], [4], [9], [8], [7], [6], [3], [5], [1]]);
    });

    it('test 5', () => {
        const root = new TreeNode(1,
            null,
            new TreeNode(2,
                null,
                new TreeNode(3,
                    null,
                    new TreeNode(4,
                        null,
                        new TreeNode(5,
                            null,
                            new TreeNode(6,
                                null,
                                new TreeNode(20,
                                    null,
                                )
                            )
                        )
                    )
                )
            )
        );

        const binaryTree = new BinaryTree(root);

        const fn = jest.fn();

        binaryTree.inOrderTraverse(fn);

        expect(fn.mock.calls).toEqual([[1], [2], [3], [4], [5], [6], [20]]);
    });
});