const leftContEl = document.getElementById('left');
const rightContEl = document.getElementById('right');


const listItemsEl = document.getElementsByClassName('listItem');

console.log('listItemsEl', listItemsEl)

for (let listItem of listItemsEl) {
    listItem.addEventListener('dragstart', (e) => {
        let selected = e.target;

        console.log('selected', selected)

        rightContEl.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        rightContEl.addEventListener('drop', () => {
            rightContEl.appendChild(selected);
            selected = null;
        })

        leftContEl.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        leftContEl.addEventListener('drop', () => {
            leftContEl.appendChild(selected);
            selected = null;
        })
    })
}