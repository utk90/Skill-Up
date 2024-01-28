// implement data structure which will be using only a single array to store the data but will act as two different stacks

class TwoStacks {
    constructor(n) {
        this.arr = [];
        this.size = n;
        this.top1 = -1;
        this.top2 = n;
    }

    push1 = (x) => {
        if (this.top1 < this.top2 - 1) {
            this.arr[++this.top1] = x;
        } else {
            console.log('Stack overflow');
            return false;
        }
    }

    push2 = (x) => {
        if (this.top2 - 1 > this.top1) {
            this.arr[--this.top2] = x;
        } else {
            console.log('Stack overflow');
            return false;
        }
    }

    pop1 = () => {
        if (this.top1 >= 0) {
            const removedElement = this.arr[this.top1--];
            return removedElement;
        } else {
            console.log('Stack underflow');
            return false;
        }
    }

    pop2 = () => {
        if (this.top2 < this.size) {
            const removedElement = this.arr[this.top2++];
            return removedElement;
        } else {
            console.log('Stack underflow');
            return false;
        }
    }
}

// input
let stack = new TwoStacks(10);
stack.push1('stack1');
stack.push1('stack1.1');
stack.push1('stack1.2');
stack.push1('stack1.3');
stack.push1('stack1.4');
stack.push2('stack2');
stack.push2('stack2.1');
stack.push2('stack2.2');
stack.push2('stack2.3');
stack.push2('stack2.4');
console.log(stack);
console.log(stack.pop1());
console.log(stack.pop2());