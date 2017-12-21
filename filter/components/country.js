var country = React.createClass({

    displayName: 'country',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired
    },

    render: function() {
        return React.DOM.tr({ id: this.props.code, key: this.props.code }, 
            React.DOM.td( null, this.props.name)
        )
    }
})