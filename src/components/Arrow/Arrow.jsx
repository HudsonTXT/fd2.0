import React, {Component} from 'react';
import './Arrow.sass';
import {ReactComponent as Left} from "../../images/back.svg";
import {ReactComponent as Down} from "../../images/down-arrow.svg";
import {ReactComponent as Right} from "../../images/right-arrow.svg";
import classNames from 'classnames';

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {arrowElement: null,}
    }

    componentWillMount() {
        const type = this.props.type;
        switch (type) {
            case 'left':
                this.setState({arrowElement: <Left/>});
                break;
            case 'down':
                this.setState({arrowElement: <Down/>});
                break;
            case 'right':
                this.setState({arrowElement: <Right/>});
                break;
            default:
                this.setState({arrowElement: <Left/>});
                break;
        }

    }

    render() {
        const classes = classNames({
            arrow: true,
            activated: this.props.activated

        });
        return (
            <div className={classes}>
                {this.state.arrowElement}
            </div>
        );


    }
}

export default Arrow;