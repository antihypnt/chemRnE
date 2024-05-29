import React from 'react';
import {useState} from 'react';

const axios = require('axios');

export default function App() {

    // 변수 영역
    const [projectName, setProjectName] = useState();
    const [userName, setUserName] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [defaultValue, setDefaultValue] = useState("");

    // 함수 영역
    const saveProjectName = event => {
        setProjectName(event.target.value);
    };

    const saveUserName = event => {
        setUserName(event.target.value);
    };

    const saveLoggedIn = () => {
        setLoggedIn(true);
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseout = () => {
        setIsHovering(false);
    };

    const getDefault = async () => {
        try {

        } catch(e) { setDefaultValue("1") }
    };

    // 스타일 영역 (CSS 안돼서 포기함)
    const buttonStyle1 = {
        position: "absolute",
        left: "130px",
        top: "320px",
        width: "120px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #EA5455, #FEB692)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
    }

    const buttonStyle2 = {
        position: "absolute",
        left: "130px",
        top: "320px",
        width: "120px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #EA5455, #FEB692)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
    }

    const buttonStyle3 = {
        position: "absolute",
        left: "130px",
        top: "320px",
        width: "120px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #EA5455, #FEB692)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
    }

    const startButtonStyle = {
        position: "absolute",
        left: "100px",
        width: "100px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #123597, #87ABFF)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "20px 0px 10px 0px",
        transitionProperty: "background, color, width, left",
        transitionDuration: "0.3s"
    }

    const hoverStartButtonStyle = {
        position: "absolute",
        left: "90px",
        width: "120px",
        height: "40px",
        background: "#fff",
        color: "#2F3545",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "20px 0px 10px 0px",
        transitionProperty: "background, color, width, left",
        transitionDuration: "0.3s"
    }

    const inputStyle = {
        left: "-5px",
        position: "absolute",
        width: "300px",
        height: "30px",
        outline: "none",
        border: 0,
        margin: "10px 0px 0px 0px",
        borderRadius: "30px",
        background: "#E9ECEF"
    }


    return(
        <div>

            {loggedIn && <div>
                <div>{userName}의 {projectName} (Ctrl+Q를 눌러 나갈 수 있으며, Ctrl+T를 눌러 홈 화면으로 돌아가세요.)</div>
                <button style={buttonStyle1} onClick={getDefault}>기초값 측정</button>
                <h3>{defaultValue}</h3>
            </div>}

            {!loggedIn && <div style={{left: "240px", top: "140px", position: "absolute"}}>
                <h3>사용자와 프로젝트명을 입력하세요.</h3>
                <input onChange={saveUserName} style = {inputStyle} placeholder={" 사용자명"}/><br/><br/>
                <input onChange={saveProjectName} style = {inputStyle} placeholder={" 프로젝트명"}/><br/><br/>
                <button
                    style={isHovering? hoverStartButtonStyle : startButtonStyle}
                    onClick={saveLoggedIn}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseout}>다음</button>
            </div>}

        </div>
    )
}