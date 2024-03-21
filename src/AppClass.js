import React, {Component} from 'react';
import BoxClass from './component/BoxClass';
import './App.css';

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            comSelect: null,
            // 0 : 바위, 1:보, 2: 가위
            // result - 0: win / 1 : lose / 2: tie
            result: 0,
            userCounter: 0,
            comCounter: 0,
        };
    }
    userSelectHandler = (num) => {
        if (this.state.userCounter === 3 || this.state.comCounter === 3) {
            alert('삼선승제로 게임이 종료 되었습니다.');
            return false;
        }
        let itemArray = Object.keys(this.choice); // 객체에서 키 값만 뽑아서 어레이로 만들어주는 함수!
        let finalItem = itemArray[num];

        console.log('itemArray', itemArray, 'finalItem', finalItem);
        const comNum = Math.floor(Math.random() * itemArray.length);
        let comFinalItem = itemArray[comNum];
        let resultData = '';
        if (num === 0) {
            // 사용자가 바위
            if (comNum === 0) {
                resultData = 2;
            } else if (comNum === 1) {
                resultData = 1;
                this.setState({
                    comCounter: this.state.comCounter + 1,
                });
            } else if (comNum === 2) {
                resultData = 0;
                this.setState({
                    userCounter: this.state.userCounter + 1,
                });
            }
        } else if (num === 1) {
            if (comNum === 0) {
                resultData = 0;
                this.setState({
                    userCounter: this.state.userCounter + 1,
                });
            } else if (comNum === 1) {
                resultData = 2;
            } else if (comNum === 2) {
                resultData = 1;
                this.setState({
                    comCounter: this.state.comCounter + 1,
                });
            }
        } else if (num === 2) {
            if (comNum === 0) {
                resultData = 1;
                this.setState({
                    comCounter: this.state.comCounter + 1,
                });
            } else if (comNum === 1) {
                resultData = 0;
                this.setState({
                    userCounter: this.state.userCounter + 1,
                });
            } else if (comNum === 2) {
                resultData = 2;
            }
        }
        console.log('num : ', num, 'comNum : ', comNum);
        this.setState({
            userSelect: this.choice[finalItem],
            comSelect: this.choice[comFinalItem],
            result: resultData,
        });
    };
    reset = (num) => {
        this.setState({
            userCounter: num,
            comCounter: num,
        });
    };
    choice = {
        rock: {name: 'Rock', icon: '✊'},
        paper: {name: 'Paper', icon: '✋'},
        scissors: {name: 'Scissors', icon: '✌'},
    };
    render() {
        return (
            <div className='body_wrapper'>
                <div className='box_wrap'>
                    <BoxClass type='user' selected={this.state.userSelect} result={this.state.result} />
                    <BoxClass type='com' selected={this.state.comSelect} result={this.state.result} />
                </div>
                <div className='counter_wrap'>
                    <p>
                        {this.state.userCounter} vs {this.state.comCounter}
                    </p>
                    <button onClick={() => this.reset(0)}>RESET</button>
                </div>
                <div className='btn_wrap'>
                    <button onClick={() => this.userSelectHandler(0)}>✊</button>
                    <button onClick={() => this.userSelectHandler(1)}>✋</button>
                    <button onClick={() => this.userSelectHandler(2)}>✌</button>
                </div>
                <div className='result_wrap'></div>
            </div>
        );
    }
}
