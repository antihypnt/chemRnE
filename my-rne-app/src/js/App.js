import React from 'react';
import {useState} from 'react';

export default function App() {

    // 스타일 영역 (CSS 안돼서 포기함)
    const buttonStyle = {
        width: "100px",
        height: "40px",
        background: "#2F3545",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        display: "inline-block",
        borderRadius: "30px",
        border: "none",
        margin: "10px 30px 0px 30px"
    }

    const divStyle = {
        width: "770px",
        height: "520px",
        textAlign: "center",
        background: "#FFF"
    }

    return(
        <div style={divStyle}>
            <button style={buttonStyle}>MODE 1</button>
            <button style={buttonStyle}>MODE 2</button>
            <button style={buttonStyle}>MODE 3</button>
            <button style={buttonStyle}>MODE 4</button>
        </div>
    )
}