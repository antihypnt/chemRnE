import React from 'react';
import {useState} from 'react';

export default function App() {

    // 변수 영역
    const [projectName, setProjectName] = useState();
    const [userName, setUserName] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [mode, setMode] = useState(0);
    const [sampleNumber, setSampleNumber] = useState("3");

    // 함수 영역
    const saveProjectName = event => {
        setProjectName(event.target.value);
    };

    const saveUserName = event => {
        setUserName(event.target.value);
    };

    const saveSampleNumber = event => {
        setSampleNumber(event.target.value);
    }

    const saveLoggedIn = () => {
        setLoggedIn(true);
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseout = () => {
        setIsHovering(false);
    };

    const saveMode1 = () => {setMode(1);};
    const saveMode2 = () => {setMode(2);};
    const saveMode3 = () => {setMode(3);};

    // 스타일 영역 (CSS 안돼서 포기함)
    const buttonStyle1 = {
        position: "absolute",
        left: "120px",
        top: "370px",
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
        opacity: mode === 0 ? 1 : 0.5
    }

    const buttonStyle2 = {
        position: "absolute",
        left: "320px",
        top: "370px",
        width: "120px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #123597, #87ABFF)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        opacity: mode === 1 ? 1 : 0.5
    }

    const buttonStyle3 = {
        position: "absolute",
        left: "520px",
        top: "370px",
        width: "120px",
        height: "40px",
        backgroundImage: "linear-gradient(45deg, #9F44D3, #E2B0FF)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        opacity: mode === 2 ? 1 : 0.5
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
        position: "absolute",
        width: "300px",
        height: "30px",
        outline: "none",
        border: 0,
        margin: "5px 0px 0px 0px",
        borderRadius: "30px",
        background: "#E9ECEF",
        textAlign: "center",
    }

    const sampleInputStyle = {
        width: "120px",
        height: "30px",
        outline: "none",
        border: 0,
        margin: "5px 0px 0px 0px",
        borderRadius: "30px",
        background: "#E9ECEF",
        textAlign: "center",
    }

    const sampleInputButton = {
        width: "50px",
        height: "30px",
        backgroundImage: "linear-gradient(45deg, #123597, #87ABFF)",
        color: "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        opacity: mode === 1 ? 1 : 0.5,
    }

    return(
        <div>

            {loggedIn && <div>
                <div>{userName}의 {projectName}<br/>(Ctrl+Q를 눌러 나갈 수 있으며, Ctrl+R를 눌러 홈 화면으로 돌아가세요.)</div>
                <button style={buttonStyle1} onClick={saveMode1}>기초 측정</button>
                <div style={{
                    left: "300px",
                    top: "100px",
                    position: "absolute",
                    display: "inline-block",
                    opacity: mode === 1 ? 1 : 0.5
                }}>
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="3"/>3개&nbsp;
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="4"/>4개&nbsp;
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="5"/>5개 <br/>
                    <input style={sampleInputStyle}/><button style={sampleInputButton}>측정</button>
                    <br/><input style={sampleInputStyle}/><button style={sampleInputButton}>측정</button>
                    <br/><input style={sampleInputStyle}/><button style={sampleInputButton}>측정</button>
                    {(sampleNumber === "4" || sampleNumber === "5") &&
                        <div>
                            <input style={sampleInputStyle}/>
                            <button style={sampleInputButton}>측정</button>
                        </div>
                    }
                    {sampleNumber === "5" &&
                    <div>
                        <input style={sampleInputStyle}/>
                        <button style={sampleInputButton}>측정</button>
                    </div>
                    }
                </div>
                <button style={buttonStyle2} onClick={saveMode2}>샘플 확정</button>
                <button style={buttonStyle3} onClick={saveMode3}>미지 측정</button>
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