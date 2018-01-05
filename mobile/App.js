"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import './custom.less';

let companyName = 'Velcom';
let clientsArr = require('./clients.json');

ReactDOM.render (
  <MobileCompany 
    name = {companyName}
    clients = {clientsArr}
  />, document.getElementById('container') 
);