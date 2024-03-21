import React, {Component} from 'react';

export default class BoxClass extends Component {
    render() {
        return (
            <div
                className={`box ${
                    this.props.type === 'user'
                        ? this.props.result === 0
                            ? 'win'
                            : this.props.result === 1
                            ? 'lose'
                            : 'tie'
                        : this.props.type === 'com'
                        ? this.props.result === 0
                            ? 'lose'
                            : this.props.result === 1
                            ? 'win'
                            : 'tie'
                        : ''
                }`}
            >
                <h4>{this.props.type}</h4>
                <p>{this.props.selected?.icon}</p>
                <h5>
                    {this.props.type === 'user'
                        ? this.props.result === 0
                            ? 'WIN'
                            : this.props.result === 1
                            ? 'LOSE'
                            : 'TIE'
                        : this.props.type === 'com'
                        ? this.props.result === 0
                            ? 'LOSE'
                            : this.props.result === 1
                            ? 'WIN'
                            : 'TIE'
                        : ''}
                </h5>
            </div>
        );
    }
}
