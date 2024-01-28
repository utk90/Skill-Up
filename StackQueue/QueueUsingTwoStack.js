// implement queue data structure using two different stacks
// instead of using an array or object as a linked list

// enqueue constly (x element added)
// st1 -> st2    st2 -> push(x)   st2 -> st1
class QueueUsingStack1 {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    // O(N)
    enqueue = (x) => {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack2.push(x);
    }

    // O(1) amortized
    dequeue = () => {
        if (this.stack1.isEmpty()) {
            while (!this.stack2.isEmpty()) {
                this.stack1.push(this.stack2.pop());
            }
        }
        return this.stack1.pop();
    }

    // O(1) amortized
    peek = () => {
        if (this.stack1.isEmpty()) {
            while (!this.stack2.isEmpty()) {
                this.stack1.push(this.stack2.pop());
            }
        }
        return this.stack1.peek();
    }

    size = () => {
        return this.stack1.size();
    }

    isEmpty = () => {
        return this.stack1.isEmpty();
    }

    clear = () => {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
}

// dequeue costly and also peek operation
// st1 -> st2    st2 -> pop      st2 -> st1
class QueueUsingStack2 {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue = (x) => {
        this.stack1.push(x);
    }

    dequeue = (x) => {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }

        const removedElement = this.stack2.pop();

        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }

        return removedElement;
    }

    peek = () => {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }

        const topElement = this.stack2.peek();

        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }

        return topElement;
    }

    size = () => {
        return this.stack1.size();
    }

    isEmpty = () => {
        return this.stack1.isEmpty();
    }

    clear = () => {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push = (x) => {
        this.stack.unshift(x);
    }

    pop = () => {
        if (!this.isEmpty())
            return this.stack.shift();
    }

    peek = () => {
        return this.stack[0];
    }

    size = () => {
        return this.stack.length;
    }

    isEmpty = () => {
        return this.stack.length === 0;
    }
}

// Input (enqueue expensive)
// const queue = new QueueUsingStack1();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.peek()); // 10
// console.log(queue.dequeue()); // 10
// console.log(queue.peek()); // 20
// console.log(queue.dequeue()); // 20
// console.log(queue.peek()); // 30
// console.log(queue.size()); // 3
// console.log(queue.isEmpty()); // false

// Input (dequeue expensive)
const queue = new QueueUsingStack2();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.dequeue()); // 20
console.log(queue.peek()); // 30
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false