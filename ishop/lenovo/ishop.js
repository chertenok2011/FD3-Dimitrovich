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
                img: React.PropTypes.string.isRequired,
                remainder: React.PropTypes.number,
            })
        )
    },

    render: function(){

        var productsMas = this.props.products.map(v=>
            React.DOM.div( {key: v.code, className: 'model-column'},
                React.DOM.div( {className: 'model'},
                    React.DOM.img( {className: 'model-image', src: v.img, alt: v.name, title: v.name}),
                    React.DOM.div( {className: 'model-description'},                             
                        React.DOM.p( {className: 'product-name'}, v.name),
                        React.DOM.p( {className: 'product-count'}, 
                            React.DOM.span( null, v.count),
                            React.DOM.span(null, '$')
                        ),
                        React.DOM.p( {className: 'product-description'}, v.description),
                        React.DOM.p( {className: 'product-remainder'}, 
                            React.DOM.span( null, 'Remainder: ' ),
                            React.DOM.span( null, v.remainder )
                        )
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