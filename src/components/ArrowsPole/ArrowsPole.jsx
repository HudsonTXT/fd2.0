import React, {Component} from 'react';
import Arrow from "../Arrow/Arrow";
import './ArrowsPole.sass';

class ArrowsPole extends Component {
    constructor(props) {
        super(props);
        this.state = {level: this.props.level || 11, arrowsCombination: [], activeArrow: 0};
        this.arrows = ['left', 'down', 'right'];
        this.arrowsCombination = [];
    }

    randomArrow(arrows) {
        return arrows[Math.floor(Math.random() * arrows.length)];
    }

    componentWillMount() {
        [...Array(this.state.level)].map((i) =>
            this.arrowsCombination.push({direction: this.randomArrow(this.arrows), activated: false})
        );



        setInterval(() => {
                this.arrowsCombination[2].activated = !this.arrowsCombination[2].activated;
                this.arrowsUpdate();
        }, 500);

        document.addEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        console.log(e);
    }

    arrowsUpdate() {
        this.setState({arrowsCombination: this.arrowsCombination});
    }


    render() {
        return (
            <div className="ArrowsPole">
                {this.state.arrowsCombination.map((arrow, i) => <Arrow type={arrow.direction}
                                                                 activated={arrow.activated}
                                                                 key={i}/>)}
            </div>
        );
    }
}

export default ArrowsPole;