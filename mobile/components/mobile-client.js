import React from 'react';
import PropTypes from 'prop-types';

import './client.less';

class MobileClient extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        cbEditClient: PropTypes.func.isRequired,
        cbDeleteClient: PropTypes.func.isRequired
    };

    state = {
        id: this.props.id,
        fio: this.props.fio,
        balance: this.props.balance,
        status: this.props.status,
        editFio: false,
        editBalance: false
    };

    componentWillReceiveProps = (newProps) => {
        console.log("MobileClient id=" + this.props.id + " componentWillReceiveProps");
        this.setState({ fio: newProps.fio, balance: newProps.balance, status: newProps.status });
    };

    editClient = () => {
        this.props.cbEditClient( this.props.id, this.props.fio, this.props.balance, this.props.status );
    }

    deleteClient = () => {
        this.props.cbDeleteClient( this.state.id );
    };

    render() {

        console.log("MobileClient id=" + this.state.id + " render");

        return (
            <tr className='mobile-client' key={this.state.id}>
                <td className='mobile-client-fio'>{this.state.fio}</td>
                <td className='mobile-client-balance'>{this.state.balance}</td>
                <td className='mobile-client-status'>{this.state.status}</td>
                <td className='mobile-client-actions'>
                    <button className='button' onClick={this.deleteClient}>Delete</button>
                    <button className='button' onClick = { this.editClient }>Edit</button>
                </td>
            </tr>
        );
    }
}

export default MobileClient;
