"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Models from './components/models';

var titleTable = 'List of products';
var defCounter = 1;
var listArr = require('./product.json');

ReactDOM.render(
    React.createElement( Models, { 
        title: titleTable, 
        products: listArr, 
        startWorkMode: 0, 
        defCounter: defCounter }), 
    document.getElementById('lenovo') 
);