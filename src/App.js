import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import Btn from './component/Btn';
import {useEffect, useState} from 'react';

function App() {
    const [userSelect, setUserSelect] = useState(0);
    const [comSelect, setComSelect] = useState(0);
    // 0 : 바위, 1:보, 2: 가위
    // result - 0: win / 1 : lose / 2: tie
    const [result, setResult] = useState();
    const userSelectHandler = (num) => {
        const comNum = Math.floor(Math.random() * 3);
        let resultData = '';
        if (num === 0) {
            // 사용자가 바위
            if (comNum === 0) {
                resultData = 2;
            } else if (comNum === 1) {
                resultData = 1;
            } else if (comNum === 2) {
                resultData = 0;
            }
        } else if (num === 1) {
            if (comNum === 0) {
                resultData = 0;
            } else if (comNum === 1) {
                resultData = 2;
            } else if (comNum === 2) {
                resultData = 1;
            }
        } else if (num === 2) {
            if (comNum === 0) {
                resultData = 1;
            } else if (comNum === 1) {
                resultData = 0;
            } else if (comNum === 2) {
                resultData = 2;
            }
        }
        console.log('num : ', num, 'comNum : ', comNum);
        setUserSelect(num);
        setComSelect(comNum);
        setResult(resultData);
    };
    const choice = {
        rock: {name: 'Rock', icon: '✊'},
        paper: {name: 'Paper', icon: '✋'},
        scissors: {name: 'Scissors', icon: '✌'},
    };
    return (
        <div className='body_wrapper'>
            <div className='box_wrap'>
                <Box type='user' selected={userSelect} result={result} />
                <Box type='com' selected={comSelect} result={result} />
            </div>
            <div className='btn_wrap'>
                <button onClick={() => userSelectHandler(0)}>✊</button>
                <button onClick={() => userSelectHandler(1)}>✋</button>
                <button onClick={() => userSelectHandler(2)}>✌</button>
            </div>
            <div className='result_wrap'></div>
            <div className='reset'>reset</div>
        </div>
    );
}

export default App;
