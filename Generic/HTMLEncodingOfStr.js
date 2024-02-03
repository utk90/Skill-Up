// Given a string and an array representing the HTML encoding of the string from and to with the
// given tag. Return the HTML encoded string

// input
const str = 'Hello, world';
const styleArr = [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']];

// output
'<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>'

// helper function works as Priority Queue
// to add tags and sort them in descending order
// based on the difference between the start and end
function addAndSort(track, index, data) {
    if (!track[index]) track[index] = [];
    track[index] = [...track[index], data];
    track[index].sort((a, b) => a.getRange() > b.getRange());
}

function Stack() {
    let items = [];
    let top = 0;

    // push an item in the stack
    this.push = function (element) {
        items[tops++] = element;
    }

    // pop an item from the stack
    this.pop = function () {
        return items[--top];
    }

    // peek top item from the stack
    this.peek = function () {
        return items[top - 1];
    }
}

// helper function to form a tag
// and trace the string
function Tag(start, end, tag) {
    this.start = start;
    this.end = end;
    this.tag = tag;
    this.text = '';

    this.getRange = () => {
        return this.end - this.start;
    }
}

function parse(str, markups) {
    // create an empty array for all the indexes of the string
    const track = new Array(str.length).fill(null);
    // add the tag at the starting point
    // of each text mentioned in the markups
    for (let markup of markups) {
        const [start, end, tag] = markup;
        addAndSort(track, start, new Tag(start, end, tag));
    }
    // create a new stack
    const html = new Stack();

    // initialize with a new Tag that has max range and empty string
    html.push(new Tag(0, Number.MAX_VALUE, ''));

    // iterate each character of the string
    for (let i = 0; i < str.length; i++) {
        // check for opening tags and add them
        while (track[i] && track[i].length > 0) {
            const cur = track[i].shift();
            cur.text = `<${cur.tag}>`;
            // for example in [0,2,'i'], [1,3,'b']
            // b is starting from 1 and ending at 3, i is in between b
            // <i><b></b></i><b></b>
            // if the end of the nested tag is larger than the parent
            // split the tag
            // and insert the remaining split to the bucket after its parent
            if (cur.end > html.peek().end) {
                const split = new Tag(html.peek().end + 1, cur.end, cur.tag);
                cur.end = html.peek().end;
                addAndSort(track, html.peek().end + 1, split);
            }
        }
    }
}