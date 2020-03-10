import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library'

let bookList = [
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304},
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320}
];

ReactDOM.render(
    <Library books={bookList}/>,
    document.getElementById('root')
);

