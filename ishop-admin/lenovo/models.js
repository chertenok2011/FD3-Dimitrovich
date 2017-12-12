var listProducts = React.createClass({

    displayName: 'listProducts',
    
    propTypes: {
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
        startWorkMode: React.PropTypes.number.isRequired
    },

    getInitialState: function() {
        return { 
            selectedCode: null,
            selectedName: '',
            selectedDescription: '',
            selectedCount: null,
            selectedRemainder: null,
            workMode:this.props.startWorkMode,
        };
    },

    selectedItem: function(selectedCode, selectedName, selectedDescription, selectedCount, selectedRemainder){
        this.setState({
            selectedCode: selectedCode,
            selectedName: selectedName,
            selectedDescription: selectedDescription,
            selectedCount: selectedCount,
            selectedRemainder: selectedRemainder,
            workMode: 1
        });
    },

    newItem: function(mode){
        console.log('new item');
        this.setState( { })
    },

    render: function(){

        var productsMas = this.props.products.map(v=>
            React.createElement(Item, {
                key: v.code,
                code: v.code,
                name: v.name,
                count: v.count,
                description: v.description,
                remainder: v.remainder,
                workMode: this.state.workMode,
                cbSelectedItem: this.selectedItem
            })           
        );

        return React.DOM.div( null,
            React.DOM.h3(null, this.props.title),
            React.DOM.div( {className: 'viewmodel-list' },
                React.DOM.div( {className: 'cell'},
                    React.DOM.ul( {className: 'items-list'}, productsMas)
                ),
                React.DOM.div({ className: 'cell'},
                    React.createElement( Form, { 
                        workMode: this.state.workMode,
                        //startWorkMode: this.props.startWorkMode,
                        key: this.props.code,
                        // code: this.props.code,
                        // name: this.props.name,
                        // count: this.props.count,
                        // description: this.props.description,
                        // remainder: this.props.remainder,
                        selectedCode: this.state.code,
                        selectedName: this.state.name,
                        selectedDescription: this.state.description,
                        selectedCount: this.state.count,
                        selectedRemainder: this.state.remainder
                    })
                )                
            ),
            React.DOM.div({ className: 'button-new' },
                React.DOM.button({ className: 'button', onClick: this.newItem }, 'New')
            )
        );      
    },
});