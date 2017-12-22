import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

import Form from './form';
import Item from './item';

class Models extends React.Component {
    
    static propTypes = {
        title: PropTypes.string,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                count: PropTypes.number,
                description: PropTypes.string.isRequired, 
                remainder: PropTypes.number
            })
        ),
        startWorkMode: PropTypes.number.isRequired,
        defCounter: PropTypes.number.isRequired
    };

    state =  {
        selectedCode: null,
        selectedName: '',
        selectedDescription: '',
        selectedCount: null,
        selectedRemainder: null,
        workMode: this.props.startWorkMode,
        products: this.props.products,
        counter: this.props.defCounter,
        errorName: false,
        errorCount: false,
        errorDescription: false,
        errorReminder: false,
        disableSave: false
    };

    editItem = (selectedCode, selectedName, selectedDescription, selectedCount, selectedRemainder) => {
        this.setState({
            selectedCode: selectedCode,
            selectedName: selectedName,
            selectedDescription: selectedDescription,
            selectedCount: selectedCount,
            selectedRemainder: selectedRemainder,
            workMode: 1
        }, this.disableSave);
    }

    nameChanged = (newName) => {
        if (!newName) {
            this.setState({ 
                errorName: true 
            }, this.disableSave)
        } else {
            this.setState({ 
                selectedName: newName, 
                errorName: false 
            }, this.disableSave)
        }
    }

    countChanged = (newCount) => {
        if (!newCount) {            
            this.setState({ 
                errorCount: true 
            }, this.disableSave)
        } else {
            var count = Number(newCount);
            this.setState({ 
                selectedCount: count, 
                errorCount: false 
            }, this.disableSave)
        }
    }

    descriptionChanged = (newDescription) => {
        if (!newDescription) {
            this.setState({ 
                errorDescription: true 
            }, this.disableSave);
        } else {
            this.setState({ 
                selectedDescription: newDescription, 
                errorDescription: false 
            }, this.disableSave);
        }
    }

    remainderChanged = (newRemainder) => {
        if (!newRemainder) {            
            this.setState({ 
                errorReminder: true 
            }, this.disableSave);
        } else {
            var remainder = Number(newRemainder);
            this.setState({ 
                selectedRemainder: remainder, 
                errorReminder: false 
            }, this.disableSave);
        }
    }

    newItem = (mode) => {
        this.setState({            
            workMode: 2,
            counter: this.state.counter++,
            selectedCode: this.state.counter,
            disableSave: true
        });
    }

    saveItem = () => {
        (this.state.workMode == 1)
        ?this.state.products.forEach( item => {
            if (this.state.selectedCode == item.code) {
                item.name = this.state.selectedName;
                item.count = this.state.selectedCount;
                item.description = this.state.selectedDescription;
                item.remainder = this.state.selectedRemainder;                       
            }
        })
        :this.state.products.push({
            code: this.state.selectedCode,
            name: this.state.selectedName,
            count: this.state.selectedCount,
            description: this.state.selectedDescription,
            remainder: this.state.selectedRemainder
        });          
        this.setState({ 
            products: this.state.products.slice(), 
            workMode: 0, 
            disableSave: false 
        }, this.disableSave);
    }
    
    deleteItem = (deleteCode) => {
        this.state.products.forEach( (item, index) => { 
            if (deleteCode == item.code)
                this.state.products.splice(index, 1);
        });
        this.setState({ 
            products: this.state.products.slice(), 
            workMode: 0, 
            disableSave: false 
        }, this.disableSave);
    }   

    closeForm = () => {
        this.setState({ 
            workMode: 0,
            errorName: false,
            errorCount: false,
            errorDescription: false,
            errorReminder: false,
            disableSave: false
        });
    }

    disableSave = () => {
        if (this.state.errorName || this.state.errorCount || this.state.errorDescription || this.state.errorReminder) {
            this.setState({ disableSave: true });
        } else {
            this.setState({ disableSave: false });
        }
    }

    render(){

        var productsMas = this.state.products.map( v =>
            <Item key = { v.code }
                code = { v.code }
                name = { v.name }
                count = { v.count }
                description = { v.description }
                remainder = { v.remainder }
                workMode = { this.state.workMode }
                cbEditItem = { this.editItem }
                cbDeletedItem = { this.deleteItem }
            />           
        );

        return (
            <div>
                <h3>{ this.props.title }</h3>
                <div className = 'viewmodel-list'>
                    <div className = 'cell'>
                        <ul className = 'items-list'>{ productsMas }</ul>
                    </div>
                    <div className = 'cell'>
                        <Form  
                            workMode = { this.state.workMode }
                            key = { this.props.selectedCode }
                            selectedCode = { this.state.selectedCode }
                            selectedName = { this.state.selectedName }
                            selectedDescription = { this.state.selectedDescription }
                            selectedCount = { this.state.selectedCount }
                            selectedRemainder = { this.state.selectedRemainder }
                            cbNameChanged = { this.nameChanged }
                            cbCountChanged = { this.countChanged }
                            cbDescriptionChanged = { this.descriptionChanged }
                            cbRemainderChanged = { this.remainderChanged }
                            cbSaveItem = { this.saveItem }
                            cbCloseForm = { this.closeForm }
                            errorName = { this.state.errorName }
                            errorCount = { this.state.errorCount }
                            errorDescription = { this.state.errorDescription }
                            errorReminder = { this.state.errorReminder }
                            disableSave = { this.state.disableSave }
                        />
                    </div>                
                </div>
                <div className = 'button-new'>
                    <button className = 'button' onClick = { this.newItem }>New</button>
                </div>
            </div>
        );      
    }
};

export default Models;