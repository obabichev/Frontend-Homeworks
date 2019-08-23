import {LLNode} from './LLNode';
import {LinkedList} from './LinkedList';

describe('[LinkedList] reverse', function () {
    it('test 1', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.reverse();

        expect(list.toString()).toEqual('0 -> 1 -> 2 -> 3 -> 4');
    });

    it('test 2', () => {

        const root = new LLNode(100);
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('100');

        list.reverse();

        expect(list.toString()).toEqual('100');
    });

    it('test 3', () => {

        const list = new LinkedList(0);

        expect(list.toString()).toEqual('');

        list.reverse();

        expect(list.toString()).toEqual('');
    });

    it('test 4', () => {

        let root = null;
        for (let i = 0; i < 10; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0');

        list.reverse();

        expect(list.toString()).toEqual('0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9');
    });
});