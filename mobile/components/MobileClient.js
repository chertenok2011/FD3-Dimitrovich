import React from 'react';
import PropTypes from 'prop-types';

import './client.less';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    }),
    cbDeleteClient: PropTypes.func.isRequired
  };

  state = {
    info: this.props.info,
    fio: this.props.info.fio,
    balance: this.props.info.balance,
    status: this.props.info.statuses,
    editFio: false,
    editBalance: false
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");
    this.setState({ info: newProps.info });
  };

  deleteClient = () => {
    var id = this.state.info.id;
    this.props.cbDeleteClient(id);
  };

  editFIO = () => {
    this.setState({ editFio: true })
  };

  changeFIO = (EO) => {
    this.setState({ fio: EO.target.value });
  }

  saveFIO = () => {
    let editStatus = false;
    this.setState({ editFio: editStatus });
  };

  render() {

    console.log("MobileClient id=" + this.state.info.id + " render");

    return (
      <tr className='mobile-client' key={this.state.info.id}>
        <td className='mobile-client-fio' onClick={this.editFIO}>
          {
            (!this.state.editFio) &&
            <span className='text'>{this.state.info.fio}</span>
          }
          {
            (this.state.editFio) &&
            <span>
              <input className='text' defaultValue={this.state.info.fio} onChange={this.changeFIO} />
              <button className='button' onClick={this.saveFIO}>Save</button>
            </span>
          }
        </td>
        <td className='mobile-client-balance'>{this.state.info.balance}</td>
        <td className='mobile-client-status'>{this.state.info.status}</td>
        <td className='mobile-client-actions'>
          <button className='button' onClick={this.deleteClient}>Delete</button>
          {/* <button claccName='button' onClick={ this.editFIO }>Edit</button> */}
        </td>
      </tr>
    );
  }
}

export default MobileClient;
