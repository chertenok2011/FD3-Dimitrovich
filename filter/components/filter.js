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
            defaultFilter: this.props.countries,
            listCountries: this.props.countries,
            sorting: false,
            filter: ''
        }
    },

    changeList: function(){
        var defaultFilter = this.state.defaultFilter;
        var filter = this.state.filter.toLowerCase();
        var sorting = this.state.sorting;
        var filterList = [];
        if (filter) {
            var newFilter = defaultFilter.forEach( function(item){
                if (item.name.toLowerCase().indexOf(filter) != -1) {
                    filterList.push({
                        name: item.name,
                        key: item.key
                    });
                }
            });
            this.setState({ listCountries: filterList });
        } else {
            filterList = defaultFilter.slice();
            this.setState({ listCountries: filterList });
        }        
        if (sorting) {
            var sortingList = filterList.slice();
            var newSortingList = sortingList.sort( function(a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            this.setState({ listCountries: newSortingList });           
        } else {
            this.setState({ listCountries: filterList });           
        }
    },

    sorting: function(EO) {
        var sorting = EO.target.checked;
        this.setState({ sorting: sorting }, this.changeList );        
    },

    filter: function(EO){
        var filter = EO.target.value;
        this.setState({ filter: filter }, this.changeList );  
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