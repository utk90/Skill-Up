// [1,2,3,4,5]
// enq(6): [1,2,3,4,5,6]
// dq(): [2,3,4,5,6]

// push(6): [1,2,3,4,5] -> (ins 6) [] -> [5,4,3,2,1]   [] -> [6,5,4,3,2,1]    [1,2,3,4,5,6] <- []

class Stack {
    constructor() {
        this.stack = [];
    }

    push(e) {
        this.stack.unshift(e);
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.shift();
        }
        return;
    }

    peek() {
        if (this.stack.length > 0) {
            return this.stack[0];
        }
        return;
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

class QueueUsingStack {
    constructor() {
        this.stack = new Stack();
    }

    enqueue(e) {
        const auxStack = new Stack();
        while (!this.stack.isEmpty()) {
            auxStack.push(this.stack.pop());
        }
        auxStack.push(e);
        while (!auxStack.isEmpty()) {
            this.stack.push(auxStack.pop());
        }
    }

    dequeue() {
        if (!this.stack.isEmpty()) {
            return this.stack.pop();
        }
        return;
    }

    front() {
        if (!this.stack.isEmpty()) {
            return this.stack.peek();
        }
        return;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    size() {
        return this.stack.size();
    }
}

const customQueue = new QueueUsingStack();
console.log(customQueue.enqueue(10));
console.log(customQueue.enqueue(20));
console.log(customQueue.enqueue(30));
console.log(customQueue.enqueue(40));

console.log(customQueue.front());

console.log(customQueue.dequeue());
console.log(customQueue.dequeue());

console.log(customQueue.front());

console.log(customQueue.enqueue(50));

console.log(customQueue.dequeue());
console.log(customQueue.dequeue());
console.log(customQueue.dequeue());
console.log(customQueue.dequeue());
console.log(customQueue.dequeue());