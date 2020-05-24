import React, { Component } from 'react';
import Header from './Header';
import Slide from './Slide';
import slider1 from './slider-img1.png';
import slider2 from './slider-img2.png';
import slider3 from './slider-img3.png';
import './Slider.scss'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activeSlide: 0,
            slides : [
                {
                    background: slider1,
                    text: "img1"
                },
                {
                    background: slider2,
                    text: "img2"
                },
                {
                    background: slider3,
                    text: "img3"
                }
            ]
        })
      }

      componentDidMount() {
          
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
            <div className="wrap">
                <Header />
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
                    <div>
                        우층애들
                    </div>
                </div>
                
            </div>
            
        );
    }
};

export default Slider;