import React from 'react';
import ReactDOM from 'react-dom';

let bookList = [
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304},
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320}
];

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Page: {pages} pages</p>
        </section>
    )
}

const Library = ({books}) => {
    return (
        <div>
            {books.map(
                (book,i) => 
                    <Book 
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                    />
            )}
        </div>

    )
}

// const Library = () => {
//     return (
//         <div>
//             <Book title="White Teeth" author = "Zadie Smith" pages = {480}/>
//             <Book title="The Sun Also Rises" author = "Ernest Hemingway" pages = {260}/>
//             <Book title="Cat's Cradle" author = "Kurt Vonnegut" pages = {304}/>
//         </div>

//     )
// }

ReactDOM.render(
    <Library books={bookList}/>,
    document.getElementById('root')
);

