import React, {Component, useEffect} from 'react';
import {useState} from 'react';

export default function App() {

    // 변수 영역
    const [projectName, setProjectName] = useState();
    const [userName, setUserName] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [mode, setMode] = useState(0);
    const [sampleNumber, setSampleNumber] = useState("3");

    // 함수 영역 (선형회귀)      참고 : (https://blog.naver.com/sujinleeme/221189944039)

    const utils = {
        sum: (arr) => arr.reduce((total, amount) => total + amount),
        avg: (arr) => utils.sum(arr) / arr.length,
    }

    const linearRegression = (data) => {
        let x_avg = utils.avg(data.x);
        let y_avg = utils.avg(data.y);
        let num = utils.sum(data.x.map((x, i) => (x - x_avg) * (data.y[i] - y_avg)));
        let den = utils.sum(data.x.map(x => ((x - x_avg) ** 2)));

        let m = num / den;
        let b = y_avg - m * x_avg;

        return [m, b];
    }

    // 그 외 다양한 함수

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

    const handleMouseOver1 = () => {
        setIsHovering1(true);
    }

    const handleMouseOver2 = () => {
        setIsHovering2(true);
    }

    const handleMouseOver3 = () => {
        setIsHovering3(true);
    }

    const handleMouseout = () => {
        setIsHovering(false);
    };

    const handleMouseout1 = () => {
        setIsHovering1(false);
    };

    const handleMouseout2 = () => {
        setIsHovering2(false);
    };

    const handleMouseout3 = () => {
        setIsHovering3(false);
    };

    const saveSampleNumber = event => {
        setSampleNumber(event.target.value);
    }

    const saveMode1 = () => {setMode(1);};
    const saveMode2 = () => {setMode(2);};
    const saveMode3 = () => {setMode(3);};

    // 스타일 영역 (CSS 안돼서 포기함)
    const buttonStyle1 = {
        position: "absolute",
        left: isHovering1? "320px" : "330px",
        top: "370px",
        width: isHovering1? "140px" : "120px",
        height: "40px",
        backgroundImage: isHovering1? "linear-gradient(45deg, #fff, #fff)" : "linear-gradient(45deg, #EA5455, #FEB692)",
        color: isHovering1? "#2F3545" : "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        transitionProperty: "background, color, width, left",
        transitionDuration: "0.3s"
    }

    const buttonStyle2 = {
        position: "absolute",
        left: isHovering2? "320px" : "330px",
        top: "370px",
        width: isHovering2? "140px" : "120px",
        height: "40px",
        backgroundImage: isHovering2? "linear-gradient(0deg, #fff, #fff)" : "linear-gradient(45deg, #123597, #87ABFF)",
        color: isHovering2? "#2F3545" : "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        transitionProperty: "background, color, width, left",
        transitionDuration: "0.3s"
    }

    const buttonStyle3 = {
        position: "absolute",
        left: isHovering3? "320px" : "330px",
        top: "370px",
        width: isHovering3? "140px" : "120px",
        height: "40px",
        backgroundImage: isHovering3? "linear-gradient(45deg, #fff, #fff)" : "linear-gradient(45deg, #9F44D3, #E2B0FF)",
        color: isHovering3? "#2F3545" : "#fff",
        boxShadow: "0 2px 4px -1px #151924",
        fontSize: "15px",
        fontFamily: "Roboto",
        borderRadius: "30px",
        border: "none",
        margin: "10px 0px 10px 0px",
        transitionProperty: "background, color, width, left",
        transitionDuration: "0.3s"
    }

    const startButtonStyle = {
        position: "absolute",
        left: isHovering? "90px" : "100px",
        width: isHovering? "120px" : "100px",
        height: "40px",
        backgroundImage: isHovering? "linear-gradient(0deg, #fff, #fff)" : "linear-gradient(45deg, #123597, #87ABFF)",
        color: isHovering? "#2F3545" : "#fff",
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

    const defaultInputStyle = {
        position: "absolute",
        left: "290px",
        top: "260px",
        width: "200px",
        height: "30px",
        outline: "none",
        border: 0,
        margin: "5px 0px 0px 0px",
        borderRadius: "30px",
        background: "#E9ECEF",
        textAlign: "center",
    }

    const sampleInputStyle = {
        width: "150px",
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
    }

    return(
        <div>

            {loggedIn && <div>
                    <div>{userName}의 {projectName}<br/>(Ctrl+Q를 눌러 나갈 수 있으며, Ctrl+R를 눌러 홈 화면으로 돌아가세요.)</div>
                {mode === 0 && <div>
                    <h3 style={{textAlign: "center", margin: "80px 0px 0px 0px"}}>시료 칸에 증류수를 넣고,<br/>터미널에서 M을 눌러 측정 후 입력하세요.</h3>
                    <input style={defaultInputStyle} placeholder={"측정값"}/>
                    <button style={buttonStyle1} onClick={saveMode1} onMouseOver={handleMouseOver1} onMouseOut={handleMouseout1}>기초값 확정</button>
                </div>}
                {mode === 1 && <div>
                    <h3 style={{textAlign: "center", margin: "30px 0px 0px 0px"}}>샘플 시료의 농도 및 각각의 측정값을 입력하세요.</h3>
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="3" style = {{margin: "20px 0px 0px 310px"}}/>3개&nbsp;
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="4"/>4개&nbsp;
                    <input onChange={saveSampleNumber} type={"radio"} name={"sampleNumber"} value="5"/>5개 <br/>
                    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;샘플 1 : <input style={sampleInputStyle} placeholder={"샘플 1 농도"}/><input style={sampleInputStyle} placeholder={"샘플 1 측정값"}/>
                    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;샘플 2 : <input style={sampleInputStyle} placeholder={"샘플 2 농도"}/><input style={sampleInputStyle} placeholder={"샘플 2 측정값"}/>
                    <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;샘플 3 : <input style={sampleInputStyle} placeholder={"샘플 3 농도"}/><input style={sampleInputStyle} placeholder={"샘플 3 측정값"}/>
                    {(sampleNumber === "4" || sampleNumber === "5") &&
                        <div>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;샘플 4 : <input style={sampleInputStyle} placeholder={"샘플 4 농도"}/><input style={sampleInputStyle} placeholder={"샘플 4 측정값"}/>
                        </div>
                    }
                    {sampleNumber === "5" &&
                        <div>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;샘플 5 : <input style={sampleInputStyle} placeholder={"샘플 5 농도"}/><input style={sampleInputStyle} placeholder={"샘플 5 측정값"}/>
                        </div>
                    }
                    <button
                        style={buttonStyle2}
                        onClick={saveMode2}
                        onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseout2}>샘플 확정
                    </button>
                </div>}
                {mode === 2 && <div>
                    <h3 style={{textAlign: "center", margin: "80px 0px 0px 0px"}}>시료 칸에 미지 시료를 넣고,<br/>터미널에서 M을 눌러 측정 후
                        입력하세요.</h3>
                    <input style={defaultInputStyle} placeholder={"측정값"}/>
                    <button
                        style={buttonStyle3}
                        onClick={saveMode3}
                        onMouseOver={handleMouseOver3}
                        onMouseOut={handleMouseout3}>미지 시료 확정
                    </button>
                </div>}
            </div>}

            {!loggedIn && <div style={{left: "240px", top: "140px", position: "absolute"}}>
                <h3>사용자와 프로젝트명을 입력하세요.</h3>
                <input onChange={saveUserName} style = {inputStyle} placeholder={"사용자명"}/><br/><br/>
                <input onChange={saveProjectName} style = {inputStyle} placeholder={"프로젝트명"}/><br/><br/>
                <button
                    style={startButtonStyle}
                    onClick={saveLoggedIn}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseout}>다음</button>
            </div>}

        </div>
    )
}