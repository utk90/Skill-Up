// implement stack data structure which can give max, min value through function in O(1) time
// input: 2 5 17 23 88 54 1 22
// output: max: 88, min: 1

function stackWithMinMax() {
    let items = [];
    let length = 0;

    this.push = (item) => {
        if (length === 0) {
            items[length++] = { value: item, max: item, min: item };
        } else {
            const data = this.peek();
            let { max = 0, min = 0 } = data;
            max = max < item ? item : max;
            min = min > item ? item : min;

            items[length++] = { value: item, max, min };
        }
    }

    this.pop = () => {
        return items[--length];
    }

    this.peek = () => {
        return items[length - 1];
    }

    this.max = () => {
        return items[length - 1].max;
    }

    this.min = () => {
        return items[length - 1].min;
    }

    this.size = () => {
        return length;
    }

    this.isEmpty = () => {
        return length === 0;
    }

    this.clear = () => {
        items = [];
        length = 0;
    }
}

// input
let SM = new stackWithMinMax();
SM.push(4);
SM.push(7);
SM.push(11);
SM.push(23);
SM.push(77);
SM.push(3);
SM.push(1);
console.log(SM.pop());
console.log(`max:${SM.max()}, min: ${SM.min()}`);