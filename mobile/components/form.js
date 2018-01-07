import React from 'react';
import PropTypes from 'prop-types';

import './form.less'

class Form extends React.PureComponent {

    static propTypes = {
        workMode: PropTypes.number,
        selectedId: PropTypes.number,
        selectedFio: PropTypes.string,
        selectedBalance: PropTypes.number,
        cbFioChanged: PropTypes.func.isRequired,
        cbBalanceChanged: PropTypes.func.isRequired,
        errorFio: PropTypes.bool.isRequired,
        errorBalance: PropTypes.bool.isRequired,
        cbSaveClient: PropTypes.func.isRequired,
        disableSave: PropTypes.bool.isRequired
    }

    state = {
        id: this.props.selectedId,
        fio: this.props.selectedFio,
        balance: this.props.selectedBalance
    }

    componentWillReceiveProps = (newProps) => {
        console.log("Form clientId=" + this.props.selectedId + " componentWillReceiveProps");
        this.setState({ fio: newProps.fio, balance: newProps.balance, status: newProps.status });
    };

    fioChanged = (EO) => {
        this.props.cbFioChanged(EO.target.value);
    }

    balanceChanged = (EO) => {
        this.props.cbBalanceChanged(EO.target.value);
    }

    saveClient = () => {
        this.props.cbSaveClient();
    }

    closeForm = () => {
        this.props.cbCloseForm();
    }

    render() {

        console.log("MobileForm render. WorkMode: " + this.props.workMode + ". ClientId " + this.props.selectedId);

        var errorText = 'This field can not be empty';

        return (
            <div className='form-wrapper' >
                {
                    ((this.props.workMode != 0) && (this.props.workMode == 1)) &&
                    <div className='item-section' >
                        <p className='product-name' >
                            <span className='bold' >FIO: </span>
                            <input type='text' placeholder='Name' defaultValue={this.props.selectedFio} onChange={this.fioChanged} />
                            {
                                (this.props.errorFio) &&
                                <span className='error' >{errorText}</span>
                            }
                        </p>
                        <p className='product-count' >
                            <span className='bold' >Balanse: </span>
                            <input type='text' placeholder='Count' defaultValue={this.props.selectedBalance} onChange={this.balanceChanged} />
                            {
                                (this.props.errorBalance) &&
                                <span className='error' >{errorText}</span>
                            }
                        </p>
                        <div className='button-section' >
                            <button className='button' onClick={this.saveClient} disabled={this.props.disableSave}>Save</button>
                            <button className='button' onClick={this.closeForm}>Cancel</button>
                        </div>
                    </div>
                }
                {
                    ((this.props.workMode != 0) && (this.props.workMode == 2)) &&
                    <div className='item-section' >
                        <p className='product-name' >
                            <span className='bold' >FIO: </span>
                            <input type='text' placeholder='Name' onChange={this.fioChanged} />
                            {
                                (this.props.errorFio) &&
                                <span className='error' >{errorText}</span>
                            }
                        </p>
                        <p className='product-count' >
                            <span className='bold' >Balanse: </span>
                            <input type='text' placeholder='Count' onChange={this.balanceChanged} />
                            {
                                (this.props.errorBalance) &&
                                <span className='error' >{errorText}</span>
                            }
                        </p>
                        <div className='button-section' >
                            <button className='button' onClick={this.saveClient} disabled={this.props.disableSave}>Save</button>
                            <button className='button' onClick={this.closeForm}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
};

export default Form;