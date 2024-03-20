import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const choice = {
        rock: { name: "Rock", icon: "✊" },
        paper: { name: "Paper", icon: "✋" },
        scissors: { name: "Scissors", icon: "✌" },
    };
    // 0 : 바위, 1:보, 2: 가위
    // result - 0: win / 1 : lose / 2: tie
    const [result, setResult] = useState();
    const [userCounter, setUserCounter] = useState(0);
    const [comCounter, setComCounter] = useState(0);
    const userSelectHandler = (num) => {
        if (userCounter === 3 || comCounter === 3) {
            alert("삼선승제로 게임이 종료 되었습니다.");
            return false;
        }
        let itemArray = Object.keys(choice); // 객체에서 키 값만 뽑아서 어레이로 만들어주는 함수!
        let finalItem = itemArray[num];

        console.log("itemArray", itemArray, "finalItem", finalItem);
        const comNum = Math.floor(Math.random() * itemArray.length);
        let comFinalItem = itemArray[comNum];
        let resultData = "";
        if (num === 0) {
            // 사용자가 바위
            if (comNum === 0) {
                resultData = 2;
            } else if (comNum === 1) {
                resultData = 1;
                setComCounter((current) => current + 1);
            } else if (comNum === 2) {
                resultData = 0;
                setUserCounter((current) => current + 1);
            }
        } else if (num === 1) {
            if (comNum === 0) {
                resultData = 0;
                setUserCounter((current) => current + 1);
            } else if (comNum === 1) {
                resultData = 2;
            } else if (comNum === 2) {
                resultData = 1;
                setComCounter((current) => current + 1);
            }
        } else if (num === 2) {
            if (comNum === 0) {
                resultData = 1;
                setComCounter((current) => current + 1);
            } else if (comNum === 1) {
                resultData = 0;
                setUserCounter((current) => current + 1);
            } else if (comNum === 2) {
                resultData = 2;
            }
        }
        console.log("num : ", num, "comNum : ", comNum);
        setUserSelect(choice[finalItem]);
        setComSelect(choice[comFinalItem]);
        setResult(resultData);
    };
    const reset = (num) => {
        setUserCounter(num);
        setComCounter(num);
    };

    return (
        <div className="body_wrapper">
            <div className="box_wrap">
                <Box type="user" selected={userSelect} result={result} />
                <Box type="com" selected={comSelect} result={result} />
            </div>
            <div className="counter_wrap">
                <p>
                    {userCounter} vs {comCounter}
                </p>
                <button onClick={() => reset(0)}>RESET</button>
            </div>
            <div className="btn_wrap">
                <button onClick={() => userSelectHandler(0)}>✊</button>
                <button onClick={() => userSelectHandler(1)}>✋</button>
                <button onClick={() => userSelectHandler(2)}>✌</button>
            </div>
            <div className="result_wrap"></div>
        </div>
    );
}

export default App;
