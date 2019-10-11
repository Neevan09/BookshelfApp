import React from 'react';


const book = (props) => {
    return <div className="Book">
        <p> Book : {props.id}</p>
        <p> Title: {props.title} </p>
        <p onClick = {props.click} className="Author"> Author: {props.author} </p>
    </div>;
};


export default book;
