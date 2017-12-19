var Countries = React.createClass({

    displayName: 'countries',

    propTypes: {
        countries: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                key: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function(){
        return {
            listCountries: this.props.countries,
            sorting: false,
            filter: ''
        }
    },

    changeList: function(){
        var filter = this.state.filter.toLowerCase();
        var sorting = this.state.sorting;
        var filterList = [];
        if (filter) {
            this.props.countries.forEach( function(item){
                if (item.name.toLowerCase().indexOf(filter) != -1) {
                    filterList.push({
                        name: item.name,
                        key: item.key
                    });
                }
            });
            this.setState({ listCountries: filterList });
        } else {
            this.setState({ listCountries: this.props.countries });
        }        
        if (sorting) {
            var sortingList = this.state.listCountries;
            sortingList.sort( function(title1, title2) {
                return title1.name - title2.name
            });
            this.setState({ listCountries: sortingList });
        } else {
            this.setState({ listCountries: filterList });
        }
    },

    sorting: function(EO) {
        var sorting = EO.target.checked;
        this.setState({ sorting: sorting });
        this.changeList();
    },

    filter: function(EO){
        var filter = EO.target.value;
        this.setState({ filter: filter });
        this.changeList();
    },

    render: function() {

        var list = this.state.listCountries.map( c => 
            React.createElement( country, {
                name: c.name,
                code: c.key
            })
        )

        return React.DOM.div( null, 
            React.DOM.div({ className: 'filter'},
                React.DOM.input({ type: 'checkbox', onChange: this.sorting }),
                React.DOM.input({ type: 'text', placeholder: 'Enter the country', onChange: this.filter} )
            ),
            React.DOM.table({ className: 'list-countries'}, 
                React.DOM.tbody({ className: 'body'}, list )
            )
        )
    }
})