import {BinaryTree, TreeNode} from './BST';

describe('[Binary Tree] height', () => {
    it('test 0', () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.height()).toEqual(0);
    });

    it('test 1', () => {
        const binaryTree = new BinaryTree();

        const root = new TreeNode(1);

        binaryTree.setRoot(root);

        expect(binaryTree.height()).toEqual(1);
    });

    it('test 2', () => {
        const root = new TreeNode(1);

        root.left = new TreeNode(2);

        const binaryTree = new BinaryTree(root);

        expect(binaryTree.height()).toEqual(2);
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

        expect(binaryTree.height()).toEqual(5);
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

        expect(binaryTree.height()).toEqual(8);
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

        expect(binaryTree.height()).toEqual(7);
    });

});