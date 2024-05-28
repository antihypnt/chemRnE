import React from 'react';
import {useState} from 'react';


export default function App() {

    // 변수 영역
    const [projectName, setProjectName] = useState();
    const [userName, setUserName] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    // 함수 영역
    const saveProjectName = event => {
        setProjectName(event.target.value);
    };

    const saveUserName = event => {
        setUserName(event.target.value);
    }

    const saveLoggedIn = () => {
        setLoggedIn(true);
    }

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

    const center = {
        width: "770px",
        height: "520px",
        textAlign: "center",
        background: "#FFF"
    }


    return(
        <div>

            {loggedIn && <div style={center}>
                <div>{userName}의 {projectName}</div>
                <button style={buttonStyle}>MODE 1</button>
                <button style={buttonStyle}>MODE 2</button>
                <button style={buttonStyle}>MODE 3</button>
                <button style={buttonStyle}>MODE 4</button>
            </div>}

            {!loggedIn && <div style={{textAlign: "center"}}>
                <h3>프로젝트명을 입력하세요.</h3>
                <input onChange={saveUserName}/><br/>
                <input onChange={saveProjectName}/><br/>
                <button style={buttonStyle} onClick={saveLoggedIn}>다음</button>
            </div>}

        </div>
    )
}