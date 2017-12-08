var listProducts = React.createClass({

    displayName: 'listProducts',
    
    propTypes: {
        title: React.PropTypes.string,
        products: React.PropTypes.array
    },

    render: function(){

        var productsMas = this.props.products.map(v=>
            React.DOM.div( {key: v.code, className: 'model-column'},
                React.DOM.div( {className: 'model'},
                    React.DOM.img( {className: 'model-image', src: v.img, alt: v.name, title: v.name}),
                    React.DOM.div( {className: 'model-description'},                             
                        React.DOM.p( {className: 'product-name'}, v.name),
                        React.DOM.p( {className: 'product-count'}, v.count),
                        React.DOM.p( {className: 'product-description'}, v.description),
                        React.DOM.p( {className: 'product-remainder'}, v.remainder)
                    )
                )
            ),
        );

        return React.DOM.div( null,
            React.DOM.h3(null, this.props.title),
            React.DOM.div( {className: 'viewmodel-table' }, productsMas)
        );      
    },
});