// implement stack using a single queue
// st -> [5,4,3,2,1]  (new element 5 added)
// qu -> [5,1,2,3,4]
// qu dq+eq -> [4,5,1,2,3]
// qu dq+eq -> [3,4,5,1,2]
// qu dq+eq -> [2,3,4,5,1]
// qu dq+eq -> [1,2,3,4,5]

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue = (x) => {
        this.queue.unshift(x);
    }

    dequeue = () => {
        return this.queue.pop();
    }

    front = () => {
        if (this.queue.length)
            return this.queue[this.queue.length - 1];
        return -1;
    }

    size = () => {
        return this.queue.length;
    }

    isEmpty = () => {
        return this.queue.length === 0;
    }
}

class StackUsingQueue {
    constructor() {
        this.queue = new Queue();
    }

    push = (x) => {
        let queueSize = this.queue.size();
        this.queue.enqueue(x);

        while (queueSize--) {
            const element = this.queue.dequeue();
            this.queue.enqueue(element);
        }
    }

    pop = () => {
        return this.queue.dequeue();
    }

    peek = () => {
        return this.queue.front();
    }

    size = () => {
        return this.queue.size();
    }

    isEmpty = () => {
        return this.queue.isEmpty();
    }

    clear = () => {
        this.queue = new Queue();
    }
}

// input
let stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());