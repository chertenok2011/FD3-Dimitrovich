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
        startWorkMode: React.PropTypes.number.isRequired,
        defCounter: React.PropTypes.number.isRequired
    },

    getInitialState: function() {
        return { 
            selectedCode: null,
            selectedName: '',
            selectedDescription: '',
            selectedCount: null,
            selectedRemainder: null,
            workMode: this.props.startWorkMode,
            products: this.props.products,
            counter: this.props.defCounter
        };
    },

    editItem: function(selectedCode, selectedName, selectedDescription, selectedCount, selectedRemainder){
        this.setState({
            selectedCode: selectedCode,
            selectedName: selectedName,
            selectedDescription: selectedDescription,
            selectedCount: selectedCount,
            selectedRemainder: selectedRemainder,
            workMode: 1
        });
    },

    nameChanged: function(newName){
        this.setState({ selectedName: newName })
    },

    countChanged: function (newCount) {
        this.setState({ selectedCount: Number(newCount) })
    },

    descriptionChanged: function(newDescription) {
        this.setState({ selectedDescription: newDescription })
    },

    remainderChanged: function(newRemainder) {
        this.setState({ selectedRemainder: Number(newRemainder) })
    },

    newItem: function(mode){
        this.setState({            
            workMode: 2,
            counter: this.state.counter++,
            selectedCode: this.state.counter
        })
    },

    saveItem: function(){
        (this.state.workMode == 1)
        ?this.state.products.forEach( item => {
            if (this.state.selectedCode == item.code) {
                item.name = this.state.selectedName;
                item.count = this.state.selectedCount;
                item.description = this.state.selectedDescription;
                item.remainder = this.state.selectedRemainder;  
                console.log(item);                     
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
    },
    
    deleteItem: function(deleteCode){
        this.state.products.forEach( (item, index) => {
            if (deleteCode == item.code)
                this.state.products.splice(index, 1)
        });
        this.setState( { products: this.state.products.slice(), workMode: 0 });
    },        

    closeForm: function(){
        this.setState({ workMode: 0 })
    },

    render: function(){

        var productsMas = this.state.products.map(v=>
            React.createElement(Item, {
                key: v.code,
                code: v.code,
                name: v.name,
                count: v.count,
                description: v.description,
                remainder: v.remainder,
                workMode: this.state.workMode,
                cbEditItem: this.editItem,
                cbDeletedItem: this.deleteItem
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
                        key: this.props.selectedCode,
                        selectedCode: this.state.selectedCode,
                        selectedName: this.state.selectedName,
                        selectedDescription: this.state.selectedDescription,
                        selectedCount: this.state.selectedCount,
                        selectedRemainder: this.state.selectedRemainder,
                        cbNameChanged: this.nameChanged,
                        cbCountChanged: this.countChanged,
                        cbDescriptionChanged: this.descriptionChanged,
                        cbRemainderChanged: this.remainderChanged,
                        cbSaveItem: this.saveItem,
                        cbCloseForm: this.closeForm
                    })
                )                
            ),
            React.DOM.div({ className: 'button-new' },
                React.DOM.button({ className: 'button', onClick: this.newItem }, 'New')
            )
        );      
    },
});