import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Filter from './Filter';

import './company.less';

let filterStatus = require('./../statuses.json');

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        status:  PropTypes.string.isRequired       
      })
    )
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    filter: "All"
  };

  setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'Velcom' });
  };

  setBalance = (clientId, newBalance) => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach((c, i) => {
      //if ( c.id==clientId ) {
      if (c.id == clientId && c.balance != newBalance) {
        let newClient = { ...c }; // копия хэша изменившегося клиента
        newClient.balance = newBalance;
        newClients[i] = newClient;
      }
    });
    this.setState({ clients: newClients });
  };

  /*
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  */

  setBalance1 = () => {
    this.setBalance(105, 230);
  };

  setBalance2 = () => {
    this.setBalance(105, 250);
  };

  deleteClient = (id) => {
    let newClients = this.state.clients.slice();
    newClients.forEach((client, index) => {
      if (client.id == id) {
        newClients.splice(index, 1);
      }
      this.setState({ clients: newClients });
    })
  };

  changeFilter = (EO) => {
    let clients = [...this.props.clients];
    let status = EO.target.value;
    let newClients = [];
    if (status != 'All') {    
      clients.forEach( (client, i) => {
        if (client.status === status) {
          newClients.push({
            id: client.id, 
            fio: client.fio, 
            balance: client.balance,
            status: client.status
          });
        }       
      });
      this.setState({ filter: status, clients: newClients });
    } else {
      this.setState({ filter: status, clients: this.props.clients });
    }
  };

  render() {

    console.log("MobileCompany render");
    console.log(this.state);

    var clientsCode = this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} cbDeleteClient={this.deleteClient} />
    );

    let filters = filterStatus.map(filter =>
      <Filter option={filter} key={filter.code} />
    );

    return (
      <div className='mobile-company'>
        <div className='buttons-company'>
          <button className='button' type="button" onClick={this.setName1}>МТС</button>
          <button className='button' type="button" onClick={this.setName2}>Velcom</button>
        </div>
        <div className='mobile-company-name'>
          <h3>Компания &laquo;{this.state.name}&raquo;</h3>
        </div>
        <div className='filters-block'>
          <button className='add'>Add client</button>
          <select onChange={this.changeFilter} value={this.state.filter}>
            {filters}
          </select>
        </div>
        <table className='mobile-company-clients' >
          <thead>
            <tr>
              <th className="mobile-client-fio">FIO</th>
              <th className="mobile-client-balance">Balance</th>
              <th className="mobile-client-status">Status</th>
              <th className="mobile-client-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>
        </table>
        <div className='button-add-client' onClick={this.addClient}></div>
      </div>
    );
  }
}

export default MobileCompany;
