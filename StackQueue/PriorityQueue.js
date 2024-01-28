// real life scenarios:
// Dijkstra's shortest path, Prim's algorithm, Data compresion (huffman codes), Operting system (load balancing)
// operations involved: enqueue, dequeue, front, rear, size, isEmpty

// 1st approach: add elements at appropriate places based on their priorities
// 2nd approach: queue elements as they are added and remove them according to their priorities

function PriorityQueue() {
    let items = [];

    // container
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // add a new element in a queue
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        // to check if element is added
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority > items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement);
        }
    }

    this.dequeue = () => {
        return items.shift();
    }

    this.front = () => {
        return items[0];
    }

    this.rear = () => {
        return items[items.length - 1];
    }

    this.isEmpty = () => {
        return items.length === 0;
    }

    this.size = () => {
        return items.length;
    }

    this.print = () => {
        for (let item of items) {
            console.log(`${item.element} - ${item.priority}`);
        }
    }
}

// input
let pQ = new PriorityQueue();
pQ.enqueue(1, 3);
pQ.enqueue(5, 2);
pQ.enqueue(6, 1);
pQ.enqueue(11, 1);
pQ.enqueue(13, 1);
pQ.enqueue(10, 3);
console.log('deque element: ', pQ.dequeue());
pQ.print();