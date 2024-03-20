import React, { Component } from "react";

export default class BoxClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultClass: "tie",
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.resultClass !== this.state.resultClass) {
            this.FnResult();
        }
    }

    FnResult = () => {
        if (this.props.result === 0) {
            this.props.type === "user"
                ? this.setState(
                      {
                          resultClass: "win",
                      },
                      this.FnResult
                  )
                : this.props.type === "com"
                ? this.setState(
                      {
                          resultClass: "lose",
                      },
                      this.FnResult
                  )
                : this.setState(
                      {
                          resultClass: "tie",
                      },
                      this.FnResult
                  );
        } else if (this.props.result === 1) {
            this.props.type === "user"
                ? this.setState(
                      {
                          resultClass: "lose",
                      },
                      this.FnResult
                  )
                : this.props.type === "com"
                ? this.setState(
                      {
                          resultClass: "win",
                      },
                      this.FnResult
                  )
                : this.setState(
                      {
                          resultClass: "tie",
                      },
                      this.FnResult
                  );
        }
    };

    render() {
        return (
            <div className={`box ${this.state.resultClass}`}>
                <p>{this.props.result}</p>
                <h4>{this.props.type}</h4>
                <p>{this.props.selected?.icon}</p>
                <h5>{this.state.resultClass.toUpperCase()}</h5>
            </div>
        );
    }
}
