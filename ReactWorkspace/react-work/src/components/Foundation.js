// create a nested header element using React.createElement(h1,h2,h3 inside a div with class 'title')
import React from 'react';

const header = React.createElement('div', { 'className': 'title' },
    [
        React.createElement('h1', {
            'key': 'title1'
        }, 'This is h1 tag'),
        React.createElement('h2', {
            'key': 'title2'
        }, 'This is h2 tag'),
        React.createElement('h3', {
            'key': 'title3'
        }, 'This is h3 tag')
    ]
);

// create the same element using JSX
const headerJSX = (
    <div className='title'>
        <h1 key={'title1'}>This is h1 tag</h1>
        <h2 key={'title2'}>This is h2 tag</h2>
        <h3 key={'title3'}>This is h3 tag</h3>
    </div>
)

// create a functional component of the same with JSX
const headerComponent = () => {
    return (
        <div className='title'>
            <h1 key={'title1'}>This is h1 tag</h1>
            <h2 key={'title2'}>This is h2 tag</h2>
            <h3 key={'title3'}>This is h3 tag</h3>
        </div>
    )
}

export { header, headerJSX, headerComponent };