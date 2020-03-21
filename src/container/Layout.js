import React, { Component } from 'react';
import MagicEightBall from '../components/MagicEightBall';

class Layout extends Component{

    state = {
        placeholder1: '',
        placeholder2: ''
    }

    render() {
        return (
            <div>
             <MagicEightBall />
            </div>
        )
    }
}

export default Layout;

