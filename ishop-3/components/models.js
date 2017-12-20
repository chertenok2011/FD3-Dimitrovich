import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

import Form from './form';
import Item from './item';

class Models extends React.Component {
    
    static propTypes = {
        title: React.PropTypes.string,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
                count: React.PropTypes.number,
                description: React.PropTypes.string.isRequired, 
                remainder: React.PropTypes.number
            })
        ),
        startWorkMode: React.PropTypes.number.isRequired,
        defCounter: React.PropTypes.number.isRequired
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
        errorReminder: false
    };

    editItem = (selectedCode, selectedName, selectedDescription, selectedCount, selectedRemainder) => {
        this.setState({
            selectedCode: selectedCode,
            selectedName: selectedName,
            selectedDescription: selectedDescription,
            selectedCount: selectedCount,
            selectedRemainder: selectedRemainder,
            workMode: 1
        });
    }

    nameChanged = (newName) => {
        this.setState({ 
            selectedName: newName, 
            // errorName: false 
        });
    }

    nameBlur = (name) => {
        var reg = /^\d+$/;
        if(reg.test(name) ) {
            
        }
    }

    countChanged = (newCount) => {
        var count = Number(newCount);
        if (!isNaN(count) || newRemainder != "" ) {
            this.setState({ errorCount: true })
        }
        else {
            this.setState({ 
                selectedCount: count, 
                errorCount: false 
            })
        }
    }

    descriptionChanged = (newDescription) => {
        if (newDescription == '') {
            this.setState({ errorDescription: true })
        } 
        else {
            this.setState({ 
                selectedDescription: newDescription, 
                errorDescription: false 
            })
        }
    }

    remainderChanged = (newRemainder) => {
        var remainder = Number(newRemainder);
        if (!isNaN(remainder) || newRemainder != "" ) {
            this.setState({ errorReminder: true })
        }
        else {
            this.setState({ 
                selectedRemainder: remainder, 
                errorReminder: false 
            })
        }
    }

    newItem = (mode) => {
        this.setState({            
            workMode: 2,
            counter: this.state.counter++,
            selectedCode: this.state.counter
        })
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
        this.setState( { products: this.state.products.slice(), workMode: 0 });
    }
    
    deleteItem = (deleteCode) => {
        this.state.products.forEach( (item, index) => {
            if (deleteCode == item.code)
                this.state.products.splice(index, 1)
        });
        this.setState( { products: this.state.products.slice(), workMode: 0 });
    }   

    closeForm = () => {
        this.setState({ workMode: 0 })
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
                        <ul className = 'items-list'>{ productsMas } </ul>
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
                            cbNameBlur = { this.nameBlur }
                        />
                    </div>                
                </div>
                <div className = 'button-new'>
                    <button className = 'button' onClick = { this.newItem }> 'New'</button>
                </div>
            </div>
        );      
    }
};

export default Models;