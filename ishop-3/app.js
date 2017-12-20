"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/custom.css';

import Models from './components/models';

var titleTable = 'List of products';
var defCounter = 1;
var listArr = require('./products.json');

for (var i=0; i<listArr.length; i++){
    listArr[i].code = defCounter++
}

ReactDOM.render(
    <Models  
        title = { titleTable }
        products = { listArr }
        startWorkMode = { 0 }
        defCounter = { defCounter } />,
    document.getElementById('lenovo') 
);