// implement functionality where you can navigate through the browsed history
// visit(url): marks the entry of the URL in the history
// current(): returns the URL of the current page
// backward(): navigate to the previous URL
// forward(): navigate to the next URL

function BrowserHistory() {
    const visited = [];
    let currentIdx = -1;

    this.visit = (url) => {
        visited.push(url);
        currentIdx++;
    }

    this.current = () => {
        if (currentIdx >= 0)
            return visited[currentIdx];
        console.error(`No URL exists at ${currentIdx} index`)
    }

    this.backward = () => {
        --currentIdx;
    }

    this.forward = () => {
        ++currentIdx;
    }
}

const browserObj = new BrowserHistory();
browserObj.visit('1.org');
browserObj.visit('2.org');
browserObj.visit('3.org');
browserObj.visit('4.org');
console.log(browserObj.current());
browserObj.backward();
browserObj.backward();
browserObj.backward();
console.log(browserObj.current());