import React, { Component } from 'react';
import logo from './logo.png';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="inner">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;