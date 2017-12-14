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
    },

    nameChanged: function(EO) {
        console.log(EO.target.value);
        this.props.cbNameChanged(EO.target.value);
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

    render: function(){
        return React.DOM.div( {className: 'form-wrapper'},
            (this.props.workMode == 0)
            ? null 
            :(this.props.workMode == 1)
            ? React.DOM.div({ className: 'item-section' },
                React.DOM.p({ className: 'product-name' },
                    React.DOM.span({ className: 'bold' }, 'Name: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Name', defaultValue: this.props.selectedName, onChange: this.nameChanged })
                ),                
                React.DOM.p( {className: 'product-count'}, 
                    React.DOM.span({ className: 'bold' }, 'Count: '),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Count', defaultValue: this.props.selectedCount, onChange: this.countChanged })
                ),
                React.DOM.p({ className: 'product-description' }, 
                    React.DOM.span({ className: 'bold' }, 'Description: '),
                    React.DOM.textarea({ className: '', rows: 4, placeholder: 'Description', defaultValue: this.props.selectedDescription, onChange: this.descriptionChanged })
                ),
                React.DOM.p({ className: 'product-remainder' }, 
                    React.DOM.span({ className: 'bold' }, 'Remainder: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Remainder', defaultValue: this.props.selectedRemainder, onChange: this.remainderChanged })
                ),
                React.DOM.div({className: 'button-section'},
                    React.DOM.button({ className: 'button', onClick: this.saveItem }, 'Save'),
                    React.DOM.button({ className: 'button', onClick: this.closeForm }, 'Cancel')
                )                    
            )
            :(this.props.workMode == 2)
            ?React.DOM.div({ className: 'item-section' },
                React.DOM.p({ className: 'product-name' },
                    React.DOM.span({ className: 'bold' }, 'Name: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Name', onChange: this.nameChanged })
                ),                
                React.DOM.p( {className: 'product-count' }, 
                    React.DOM.span({ className: 'bold' }, 'Count: '),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Count', onChange: this.countChanged })
                ),
                React.DOM.p( {className: 'product-description' }, 
                    React.DOM.span({ className: 'bold' }, 'Description: ' ),
                    React.DOM.textarea({ className: '', rows: 4, placeholder: 'Description', onChange: this.descriptionChanged })
                ),
                React.DOM.p( {className: 'product-remainder'}, 
                    React.DOM.span({ className: 'bold' }, 'Remainder: ' ),
                    React.DOM.input({ className: '', type: 'text', placeholder: 'Remainder', onChange: this.remainderChanged })
                ),
                React.DOM.div({className: 'button-section' },
                    React.DOM.button({ className: 'button', onClick: this.saveItem }, 'Save'),
                    React.DOM.button({ className: 'button', onClick: this.closeForm }, 'Cancel')
                )                    
            )
            :null
        )
    }
})