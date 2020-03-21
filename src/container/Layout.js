import React, { Component } from 'react';
import MagicEightBall from '../components/MagicEightBall';
import styles from './Styles.module.css';

class Layout extends Component{

    state = {
        placeholder1: '',
        placeholder2: ''
    }

    render() {
        return (
            <div className={styles.main}>
             <MagicEightBall />
            </div>
        )
    }
}

export default Layout;

