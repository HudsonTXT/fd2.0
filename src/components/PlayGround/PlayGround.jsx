import React, {Component} from 'react';
import ArrowsPole from "../ArrowsPole/ArrowsPole";


class PlayGround extends Component {

    constructor(props) {
        super(props);
        this.state = {level: 11};
    }








    render() {
        return (
            <div className="playground">
                <ArrowsPole level={this.props.level}/>
            </div>
        );
    }
}

export default PlayGround;