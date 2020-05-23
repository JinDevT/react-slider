import React, { Component } from 'react';
import Slide from './Slide';
import './Slider.scss'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activeSlide: 0,
            slides : [
                {
                    background: "https://www.w3schools.com/w3images/coffee.jpg",
                    text: "Coffee"
                },
                {
                    background: "https://www.w3schools.com/w3images/workbench.jpg",
                    text: "Workbench"
                },
                {
                    background: "https://www.w3schools.com/w3images/sound.jpg",
                    text: "Sound"
                }
            ]
        })
      }
    
      prevSlide = () => {
        const { slides } = this.state;
        let slide = this.state.activeSlide - 1 < 0 ? slides.length - 1 : this.state.activeSlide - 1;
        this.setState({
          activeSlide: slide
        });
      }
      nextSlide = () => {
        const { slides } = this.state;
        let slide = this.state.activeSlide + 1 < slides.length ? this.state.activeSlide + 1 : 0;
        this.setState({
          activeSlide: slide
        });
      }
    render() {
        const { slides } = this.state;
        return (
            <div className="slider">
                <div>
                    {slides.map((slide, index) => {
                    return (
                        <Slide
                        key={index}
                        background={slide.background}
                        text={slide.text}
                        active={index === this.state.activeSlide}
                        />
                    );
                })}
                <div className="leftArrow" onClick={this.nextSlide}>오른버튼</div>
                <div className="rightArrow" onClick={this.prevSlide}>왼쪽버튼</div>
                </div>
            </div>
        );
    }
};

export default Slider;