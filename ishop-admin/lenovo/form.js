var Form = React.createClass({

    displayName: 'form',

    propTypes: {
        workMode: React.PropTypes.number,
        //startWorkMode: React.PropTypes.number.isRequired,
        selectedCode: React.PropTypes.number,
        selectedName: React.PropTypes.string,
        selectedDescription: React.PropTypes.string,
        selectedCount: React.PropTypes.number,
        selectedRemainder: React.PropTypes.number
    },

    render: function(){
        return React.DOM.div( {className: 'form-wrapper'},
            (this.props.workMode == 0)
            ? null 
            :(this.props.workMode == 1 || this.props.workMode == 2)
            ? React.DOM.div({ className: 'item-section'},
                React.DOM.p( {className: 'product-name'},
                    React.DOM.span( {className: 'bold'}, 'Name: ' ),
                    (this.props.workMode == 1)
                    ?React.DOM.input( {className: '', type: 'text', placeholder: 'Name', defaultValue: this.props.selectedName })
                    :React.DOM.input( {className: '', type: 'text', placeholder: 'Name'})
                ),                
                React.DOM.p( {className: 'product-count'}, 
                    React.DOM.span( {className: 'bold'}, 'Count: '),
                    React.DOM.input(  {className: '', type: 'text', placeholder: 'Count'})
                ),
                React.DOM.p( {className: 'product-description'}, 
                    React.DOM.span( {className: 'bold'}, 'Description: '),
                    React.DOM.textarea( {className: '', rows: 4, placeholder: 'Description'})
                ),
                React.DOM.p( {className: 'product-remainder'}, 
                    React.DOM.span( {className: 'bold'}, 'Remainder: ' ),
                    React.DOM.input( {className: '', type: 'text', placeholder: 'Remainder'})
                ),
                React.DOM.div({className: 'button-section'},
                    React.DOM.button( {className: 'button'}, 'Save'),
                    React.DOM.button( {className: 'button'}, 'Cancel')
                )                    
            )
            :null
        )
    }
})