var Form = React.createClass({

    displayName: 'form',

    propTypes: {
        workMode: React.PropTypes.number,
        selectedCode: React.PropTypes.number,
        selectedName: React.PropTypes.string,
        selectedDescription: React.PropTypes.string,
        selectedCount: React.PropTypes.number,
        selectedRemainder: React.PropTypes.number,
        cbNameChanged: React.PropTypes.func.isRequired,
        cbCountChanged: React.PropTypes.func.isRequired,
        cbRemainderChanged: React.PropTypes.func.isRequired,
        cbSaveItem: React.PropTypes.func.isRequired,
        cbNameBlur: React.PropTypes.func.isRequired
        // errorName: React.PropTypes.bool.isRequired,
        // errorCount: React.PropTypes.bool.isRequired,
        // errorDescription: React.PropTypes.bool.isRequired,
        // errorReminder: React.PropTypes.bool.isRequired,
    },

    nameChanged: function(EO) {
        this.props.cbNameChanged(EO.target.value);
    },

    nameBlur: function(EO){
        this.props.cbNameBlur(EO.target.value);
    },

    countChanged: function(EO){
        this.props.cbCountChanged(EO.target.value);
    },

    descriptionChanged: function(EO){
        this.props.cbDescriptionChanged(EO.target.value);
    },

    remainderChanged: function(EO){
        this.props.cbRemainderChanged(EO.target.value);
    },

    saveItem: function(EO) {
        this.props.cbSaveItem();
    },

    closeForm: function(EO) {
        this.props.cbCloseForm();
    },

    validateString: function(EO){
        var string = EO.target.value;
        if (string == '') {
            this.setState({ errorString: true })
        }
    },

    render: function(){

        var stringErrorText = 'This field can not be empty';
        var numberErrorText = 'Enter the number';

        return React.DOM.div( {className: 'form-wrapper'},
            (this.props.workMode == 0)
            ? null 
            :(this.props.workMode == 1)
            ? React.DOM.div({ className: 'item-section' },
                React.DOM.p({ className: 'product-name' },
                    React.DOM.span({ className: 'bold' }, 'Name: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Name', defaultValue: this.props.selectedName, onChange: this.nameChanged }),
                    (this.props.errorName)
                    ?React.DOM.span({ className: 'error'}, stringEmptyText )
                    :null
                ),                
                React.DOM.p( {className: 'product-count'}, 
                    React.DOM.span({ className: 'bold' }, 'Count: '),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Count', defaultValue: this.props.selectedCount, onChange: this.countChanged }),
                    (this.props.errorCount)
                    ?React.DOM.span({ className: 'error'}, numberErrorText )
                    :null
                ),
                React.DOM.p({ className: 'product-description' }, 
                    React.DOM.span({ className: 'bold' }, 'Description: '),
                    React.DOM.textarea({ className: '', rows: 4, placeholder: 'Description', defaultValue: this.props.selectedDescription, onChange: this.descriptionChanged }),
                    (this.props.errorDescription)
                    ?React.DOM.span({ className: 'error'}, stringErrorText )
                    :null
                ),
                React.DOM.p({ className: 'product-remainder' }, 
                    React.DOM.span({ className: 'bold' }, 'Remainder: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Remainder', defaultValue: this.props.selectedRemainder, onChange: this.remainderChanged }),
                    (this.props.errorReminder)
                    ?React.DOM.span({ className: 'error'}, numberErrorText )
                    :null
                ),
                React.DOM.div({className: 'button-section'},
                    React.DOM.button({ className: 'button', onClick: this.saveItem, disabled: ( this.props.errorName && this.props.errorCount && this.props.errorDescription && this.props.errorReminder )}, 'Save'),
                    React.DOM.button({ className: 'button', onClick: this.closeForm }, 'Cancel')
                )                    
            )
            :(this.props.workMode == 2)
            ?React.DOM.div({ className: 'item-section' },
                React.DOM.p({ className: 'product-name' },
                    React.DOM.span({ className: 'bold' }, 'Name: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Name', onChange: this.nameChanged, onBlur: this.nameBlur }),
                    (this.props.errorName)
                    ?React.DOM.span({ className: 'error'}, stringErrorText )
                    :null
                ),                
                React.DOM.p( {className: 'product-count' }, 
                    React.DOM.span({ className: 'bold' }, 'Count: '),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Count', onChange: this.countChanged }),
                    (this.props.errorCount)
                    ?React.DOM.span({ className: 'error'}, numberErrorText )
                    :null
                ),
                React.DOM.p( {className: 'product-description' }, 
                    React.DOM.span({ className: 'bold' }, 'Description: ' ),
                    React.DOM.textarea({ className: '', rows: 4, placeholder: 'Description', onChange: this.descriptionChanged }),
                    (this.props.errorDescription)
                    ?React.DOM.span({ className: 'error'}, stringErrorText )
                    :null
                ),
                React.DOM.p( {className: 'product-remainder'}, 
                    React.DOM.span({ className: 'bold' }, 'Remainder: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Remainder', onChange: this.remainderChanged }),
                    (this.props.errorReminder)
                    ?React.DOM.span({ className: 'error'}, numberErrorText )
                    :null
                ),
                React.DOM.div({className: 'button-section' },
                    React.DOM.button({ className: 'button', onClick: this.saveItem, disabled: ( this.props.errorName && this.props.errorCount && this.props.errorDescription && this.props.errorReminder )}, 'Save'),
                    React.DOM.button({ className: 'button', onClick: this.closeForm }, 'Cancel')
                )                    
            )
            :null
        )
    }
})