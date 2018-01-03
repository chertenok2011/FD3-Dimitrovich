"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/custom.css';

import Rainbow from './components/rainbow';

var text = "RainbowFrame";
var colors = require('./colors.json');

ReactDOM.render(
    <div className='wrapper'>
        <Rainbow colors = { colors }>
            Rainbow
        </Rainbow>
    </div>,
    document.getElementById('RainbowFrame') 
);