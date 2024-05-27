import React from 'react';

export default function App() {

    // CSS 안돼서 포기함
    const buttonStyle = {
        width: "100px",
        height: "40px",
        background: "#275efe",
        color: "#fff",
        fontSize: "15px",
        fontFamily: "Roboto",
        display: "inline-block",
        borderRadius: "30px",
        border: "none",
        margin: "10px 25px 0px 25px"
    }

    const divStyle = {
        textAlign: "center"
    }

    return(
        <div style={divStyle}>
            <button style={buttonStyle}>MODE 0</button>
            <button style={buttonStyle}>MODE 2</button>
            <button style={buttonStyle}>MODE 3</button>
            <button style={buttonStyle}>MODE 4</button>
        </div>
    )
}