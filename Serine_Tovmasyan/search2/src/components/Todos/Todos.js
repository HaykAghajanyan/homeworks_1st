import React from 'react';
import './Todos.css';

function Todos({items}) {
    return items.map(item =>{
        const {id, title} = item;
        return (
            <article key ={id}>
                {title}
            </article>
        )
    })
}

export default Todos

