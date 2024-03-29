import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {

    render() {
        return(
            <div className="Coin">
                {this.props.flipped && (this.props.head ? <img src="https://www.fleur-de-coin.com/images/Thumbnails/euroimages-2eurosnew-SIZE250x250.jpg"></img>: <img src="https://www.fleur-de-coin.com/images/Thumbnails/euroimages-lithuania2euros-SIZE250x250.jpg"></img>)}
            </div>
        )
    }
}

export default Coin;