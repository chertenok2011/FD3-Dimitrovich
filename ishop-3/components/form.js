import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    static propTypes = {
        workMode: PropTypes.number,
        selectedCode: PropTypes.number,
        selectedName: PropTypes.string,
        selectedDescription: PropTypes.string,
        selectedCount: PropTypes.number,
        selectedRemainder: PropTypes.number,
        cbNameChanged: PropTypes.func.isRequired,
        cbCountChanged: PropTypes.func.isRequired,
        cbRemainderChanged: PropTypes.func.isRequired,
        cbSaveItem: PropTypes.func.isRequired,
        errorName: PropTypes.bool,
        errorCount: PropTypes.bool,
        errorDescription: PropTypes.bool,
        errorReminder: PropTypes.bool
    }

    nameChanged = (EO) => {
        this.props.cbNameChanged(EO.target.value);
    }

    countChanged = (EO) => {
        this.props.cbCountChanged(EO.target.value);
    }

    descriptionChanged = (EO) => {
        this.props.cbDescriptionChanged(EO.target.value);
    }

    remainderChanged = (EO) => {
        this.props.cbRemainderChanged(EO.target.value);
    }

    saveItem = (EO) => {
        this.props.cbSaveItem();
    }

    closeForm = (EO) => {
        this.props.cbCloseForm();
    }

    render() {

        var errorText = 'This field can not be empty';

        return ( 
            <div className = {'form-wrapper'} >
                { 
                    ((this.props.workMode != 0) && (this.props.workMode == 1)) &&
                    <div className = {'item-section' }>
                        <p className = {'product-name' }>
                            <span className = { 'bold' }>Name: </span>
                            <input type = {'text'} placeholder = { 'Name'} defaultValue = { this.props.selectedName } onChange = { this.nameChanged } />
                            {
                                (this.props.errorName) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>                
                        <p className = { 'product-count' }> 
                            <span className ={ 'bold' }>Count: </span>
                            <input type = { 'text' } placeholder = { 'Count' } defaultValue = { this.props.selectedCount }  onChange = { this.countChanged }/>
                            {
                                (this.props.errorCount) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>
                        <p className = { 'product-description' }> 
                            <span className ={ 'bold' }>Description: </span>
                            <input type = { 'text' } placeholder = { 'Description' } defaultValue = { this.props.selectedDescription }  onChange = { this.descriptionChanged }/>
                            {
                                (this.props.errorDescription) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>
                        <p className = { 'product-remainder' }> 
                            <span className ={ 'bold' }>Remainder: </span>
                            <input type = { 'text' } placeholder = { 'Remainder' } defaultValue = { this.props.selectedRemainder }  onChange = { this.remainderChanged }/>
                            {
                                (this.props.errorReminder) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>                    
                        <div className = { 'button-section' }>
                            <button className = { 'button' } onClick = { this.saveItem } disabled = { this.props.errorName && this.props.errorCount && this.props.errorDescription && this.props.errorReminder }>Save</button>
                            <button className = { 'button' } onClick = { this.closeForm }>Cancel</button>
                        </div>
                    </div>
                }
                {
                    ((this.props.workMode != 0) && (this.props.workMode == 2)) &&
                    <div className = {'item-section' }>
                        <p className = {'product-name' }>
                            <span className = { 'bold' }>Name: </span>
                            <input type = {'text'} placeholder = { 'Name'} onChange = { this.nameChanged } />
                            {
                                (this.props.errorName) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>                
                        <p className = { 'product-count' }> 
                            <span className ={ 'bold' }>Count: </span>
                            <input type = { 'text' } placeholder = { 'Count' } onChange = { this.countChanged }/>
                            {
                                (this.props.errorCount) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>
                        <p className = { 'product-description' }> 
                            <span className ={ 'bold' }>Description: </span>
                            <input type = { 'text' } placeholder = { 'Description' } onChange = { this.descriptionChanged }/>
                            {
                                (this.props.errorDescription) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>
                        <p className = { 'product-remainder' }> 
                            <span className ={ 'bold' }>Remainder: </span>
                            <input type = { 'text' } placeholder = { 'Remainder' } onChange = { this.remainderChanged }/>
                            {
                                (this.props.errorReminder) &&
                                <span className = { 'error' }>{ errorText }</span>
                            }
                        </p>                    
                        <div className = { 'button-section' }>
                            <button className = { 'button' } onClick = { this.saveItem } disabled = { this.props.errorName && this.props.errorCount && this.props.errorDescription && this.props.errorReminder }>Save</button>
                            <button className = { 'button' } onClick = { this.closeForm }>Cancel</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
};

export default Form;