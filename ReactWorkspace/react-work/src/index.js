import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const header = React.createElement('div', { 'className': 'title' },
//   [
//     React.createElement('h1', {
//       'key': 'title1'
//     }, 'This is h1 tag'),
//     React.createElement('h2', {
//       'key': 'title2'
//     }, 'This is h2 tag'),
//     React.createElement('h3', {
//       'key': 'title3'
//     }, 'This is h3 tag')
//   ]
// );

// root.render(
//   header
// );

root.render(
  <App />
)

// <Context>
// </Context>