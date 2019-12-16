import React, { Component } from 'react'
import Coin from './Coin' 

class Flipper extends Component {
    // static defaultProps = {
    //     flipped: false
    // }

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            isHead: true,
            totalNum: 0,
            headNum: 0,
            tailNum: 0
        }
        this.countSides = this.countSides.bind(this);
        this.randSide = this.randSide.bind(this);
    }

    countSides() {
        if(this.randSide() === 0 ) {
            this.setState(curState => ({
                isFlipped: curState.isFlipped = true,
                totalNum: curState.totalNum += 1,
                tailNum: curState.tailNum += 1,
                isHead: curState.isHead = false
            }))
        } else {
            this.setState(curState => ({
                isFlipped: curState.isFlipped = true,
                totalNum: curState.totalNum += 1,
                headNum: curState.headNum += 1,
                isHead: curState.isHead = true
            }))

        }
        
    }

    randSide() {
        return (Math.floor(Math.random() * 2))
    }


    render() {
        return(
            <div>
                <h2>Coin Flipper</h2>
                <Coin head={this.state.isHead} flipped={this.state.isFlipped}/>
                {/* <Coin head={false} flipped={this.state.isFlipped}/> */}
                <button onClick={this.countSides}>Flip the coin</button>
                <h5>Total: {this.state.totalNum} Heads: {this.state.headNum} Tails: {this.state.tailNum}</h5>
            </div>
        )
    }
}

export default Flipper;