// implement stack using a single queue
// st -> [1,2,3,4,5]    push(6) -> [6,1,2,3,4,5]   pop() -> [1,2,3,4,5]
// qu -> [1,2,3,4,5]   push(6): [1,2,3,4,5,6] dq + eq -> [2,3,4,5,6,1], dq + eq -> [3,4,5,6,1,2] ------ [6,1,2,3,4,5]

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(e) {
        this.queue.push(e);
    }

    dequeue() {
        if (this.queue.length > 0) {
            return this.queue.shift();
        }
        return;
    }

    front() {
        if (this.queue.length > 0) {
            return this.queue[0];
        }
        return;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

class StackUsingQueue {
    constructor() {
        this.queue = new Queue();
    }

    push(e) {
        this.queue.enqueue(e);
        let shiftCtr = this.queue.size() - 1;
        while (shiftCtr > 0) {
            const dequeuedEl = this.queue.dequeue();
            this.queue.enqueue(dequeuedEl);
            shiftCtr--;
        }
        console.log('after pushing element', this.queue);
    }

    pop() {
        if (!this.queue.isEmpty()) {
            return this.queue.dequeue();
        }
        return;
    }

    peek() {
        if (!this.queue.isEmpty()) {
            return this.queue.front();
        }
        return;
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    size() {
        return this.queue.size();
    }
}

const customStack = new StackUsingQueue();
console.log(customStack.push(1));
console.log(customStack.push(2));
console.log(customStack.push(3));
console.log(customStack.push(4));
console.log(customStack.push(5));
console.log(customStack.pop());
console.log(customStack.pop());
console.log(customStack.pop());
console.log(customStack.peek());
console.log(customStack.size());
console.log(customStack.push(10));
console.log(customStack.peek());
console.log(customStack.pop());
console.log(customStack.size());
console.log(customStack.pop());
console.log(customStack.size());
console.log(customStack.pop());
console.log(customStack.size());