"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/mobile-company';
import './custom.less';

let companyName = 'Velcom';
var defCounter = 1;
let clientsArr = require('./clients.json');

for (var i = 0; i < clientsArr.length; i++) {
  clientsArr[i].id = defCounter++;
  clientsArr[i].status = (clientsArr[i].balance > 0? "Active":"Blocked");
}

ReactDOM.render(
  <MobileCompany
    name={companyName}
    clients={clientsArr}
    startWorkMode={0}
    defCounter={defCounter} />,
  document.getElementById('container')
);