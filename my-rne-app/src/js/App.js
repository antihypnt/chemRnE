import React from 'react';

export default function App() {

    // CSS 안돼서 포기함
    const buttonStyle = {
        background: "#275efe",
        color: "#fff",
        fontSize: "15px",
        fontFamily: "roboto",
        display: "inline-block",
        borderRadius: "20px",
        border: "none"
    }

    return(
        <div>
            <button style={buttonStyle}>MODE 1</button>
            <button style={buttonStyle}>MODE 2</button>
            <button style={buttonStyle}>MODE 3</button>
            <button style={buttonStyle}>MODE 4</button>
        </div>
    )
}