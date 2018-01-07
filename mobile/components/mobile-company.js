import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './mobile-client';
import Filter from './filter';
import Form from './form';

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
                status: PropTypes.string.isRequired
            })
        ),
        startWorkMode: PropTypes.number.isRequired,
        defCounter: PropTypes.number.isRequired
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        filter: "All",
        workMode: this.props.startWorkMode,
        counter: this.props.defCounter,
        selectedId: null,
        selectedFio: '',
        selectedBalance: null,
        selectedStatus: '',
        counter: this.props.defCounter,
        errorFio: false,
        errorBalance: false,
        disableSave: false
    };

    setName1 = () => {
        this.setState({ name: 'МТС' });
    };

    setName2 = () => {
        this.setState({ name: 'Velcom' });
    };

    deleteClient = (id) => {
        let newClients = this.state.clients.slice();
        newClients.forEach((client, index) => {
            if (client.id == id) {
                newClients.splice(index, 1);
            }
            this.setState({ clients: newClients });
        });
    };

    changeFilter = (EO) => {
        let clients = [...this.props.clients];
        let status = EO.target.value;
        let newClients = [];
        if (status != 'All') {
            clients.forEach((client, i) => {
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

    editClient = (selectedId, selectedFio, selectedBalance, selectedStatus) => {
        this.setState({
            selectedId: selectedId,
            selectedFio: selectedFio,
            selectedBalance: selectedBalance,
            selectedStatus: selectedStatus,
            workMode: 1
        }, this.disableSave);
    };

    fioChanged = (newFio) => {
        if (!newFio) {
            this.setState({
                errorFio: true
            }, this.disableSave)
        } else {
            this.setState({
                selectedFio: newFio,
                errorFio: false
            }, this.disableSave)
        }
    };

    balanceChanged = (newBalance) => {
        if (!newBalance) {
            this.setState({
                errorBalance: true
            }, this.disableSave)
        } else {
            var count = Number(newBalance);
            var status = (count > 0)?"Active":"Blocked";
            console.log(count, status);
            this.setState({
                selectedBalance: count,
                selectedStatus: status,
                errorBalance: false
            }, this.disableSave)
        }
    };

    newClient = () => {
        this.state.counter++;
        this.setState({
            workMode: 2,
            counter: this.state.counter,  
            selectedId: this.state.counter,
            disableSave: true
        });
    }

    saveClient = () => {
      var newCounter = this.state.counter;
        (this.state.workMode == 1)
            ? this.state.clients.forEach(item => {
                if (this.state.selectedId == item.id) {
                    item.fio = this.state.selectedFio;
                    item.balance = this.state.selectedBalance;
                    item.status = this.state.selectedStatus;
                }
                newCounter = this.state.counter++;
            })
            : this.state.clients.push({
                id: this.state.selectedId,
                fio: this.state.selectedFio,
                balance: this.state.selectedBalance,
                status: (this.state.selectedBalance > 0)?"Active":"Blocked"
            });
        this.setState({
            clients: this.state.clients.slice(),
            workMode: 0,
            counter: newCounter,
            disableSave: false,
            selectedId: null,
            selectedFio: '',
            selectedBalance: null,
            selectedStatus: '',
        }, this.disableSave);
    }

    closeForm = () => {
        this.setState({
            workMode: 0,
            errorFio: false,
            errorBalance: false,
            disableSave: false,
            selectedId: null,
            selectedFio: '',
            selectedBalance: null,
            selectedStatus: '',
        });
    };

    disableSave = () => {
        if ((this.state.errorFio || this.state.errorBalance) || (this.state.selectedFio =="" || this.state.selectedBalance == null)) {
            this.setState({ disableSave: true });
        } else {
            this.setState({ disableSave: false });
        }
    };

    render() {

        console.log("MobileCompany render");
        console.log(this.state);

        var clientsCode = this.state.clients.map(client =>
            <MobileClient 
                key={client.id} 
                id={client.id}
                fio={client.fio}
                status={client.status}
                balance={client.balance}
                cbEditClient={this.editClient} 
                cbDeleteClient={this.deleteClient}
            />
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
                    <button className='add' onClick={this.newClient}>Add client</button>
                    <select onChange={this.changeFilter} value={this.state.filter}>
                        {filters}
                    </select>
                </div>
                <div className='viewmodel-list'>
                    <div className='cell'>
                        <table className='mobile-company-clients'>
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
                    </div>
                    <div className='cell'>
                        <Form
                            workMode={this.state.workMode}
                            key={this.state.selectedId}
                            selectedId={this.state.selectedId}
                            selectedFio={this.state.selectedFio}
                            selectedBalance={this.state.selectedBalance}
                            cbFioChanged={this.fioChanged}
                            cbBalanceChanged={this.balanceChanged}
                            cbSaveClient={this.saveClient}
                            cbCloseForm={this.closeForm}
                            errorFio={this.state.errorFio}
                            errorBalance={this.state.errorBalance}
                            disableSave={this.state.disableSave}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileCompany;
