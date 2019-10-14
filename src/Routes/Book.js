import React from 'react';


const book = (props) => {
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}></div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title"></div>
            <div className="book-authors"></div>
        </div>
    );
   /* return <div className="Book">
        <p> Book : {props.id}</p>
        <p> Title: {props.title} </p>
        <p onClick = {props.click} className="Author"> Author: {props.author} </p>
        <input type="text" onChange={props.changed} />
    </div>;*/
};


export default book;
