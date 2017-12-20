import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    
    //displayName: 'item',

    static propTypes = {
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        count: React.PropTypes.number,
        description: React.PropTypes.string.isRequired,
        remainder: React.PropTypes.number,
        workMode: React.PropTypes.number.isRequired,
        cbEditItem: React.PropTypes.func.isRequired,
        cbDeletedItem: React.PropTypes.func.isRequired
    }

    editItem = (EO) => {
        this.props.cbEditItem( this.props.code, this.props.name, this.props.description, this.props.count, this.props.remainder );
    }

    deleteItem = (EO) => {
        this.props.cbDeletedItem(this.props.code);
    }

    render() {
        return React.DOM.li({ className: 'item-body' },
            React.DOM.div({ className: 'item-section' },
                React.DOM.p({ className: 'product-name' }, this.props.name ),
                React.DOM.p({ className: 'product-count' }, 
                    React.DOM.span({ className: 'bold' }, 'Count: '),
                    React.DOM.span( null, this.props.count ),
                    React.DOM.span( null, '$' )
                ),
                React.DOM.p({ className: 'product-description' }, 
                    React.DOM.span({ className: 'bold'}, 'Description: ' ),
                    React.DOM.span( null, this.props.description )
                ),
                React.DOM.p({ className: 'product-remainder' }, 
                    React.DOM.span({ className: 'bold' }, 'Remainder: ' ),
                    React.DOM.span( null, this.props.remainder )
                ),
                React.DOM.div({ className: 'button-section' },
                    React.DOM.button({ className: 'button', onClick: this.editItem }, 'Edit' ),
                    React.DOM.button({ className: 'button', onClick: this.deleteItem }, 'Delete' )
                )                    
            )
        )       
    }
};

export default Item;