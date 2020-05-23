import React, { Component } from 'react';
import './Slider.scss'

class Slide extends Component {
    render() {
        let slideStyle = { 
                         backgroundImage: `url( ${this.props.background})`,
                         backgroundRepeat:  'no-repeat',
                         backgroundPosition: 'center',
                         backgroundSize: 'cover'
                        };
        return (
            <div
                className="slider__slide"
                data-active={this.props.active}
                style={slideStyle}
            >
                <div className="slider__slide__text">{this.props.text}</div>
            </div>
        ) 
    }
}

export default Slide;