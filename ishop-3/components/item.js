import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number,
        description: PropTypes.string.isRequired,
        remainder: PropTypes.number,
        workMode: PropTypes.number.isRequired,
        cbEditItem: PropTypes.func.isRequired,
        cbDeletedItem: PropTypes.func.isRequired
    }

    editItem = (EO) => {
        this.props.cbEditItem( this.props.code, this.props.name, this.props.description, this.props.count, this.props.remainder );
    }

    deleteItem = (EO) => {
        this.props.cbDeletedItem(this.props.code);
    }

    render() {
        return (
            <li className = 'item-body' >
                <div className = 'item-section' >
                    <p className = 'product-name' >{ this.props.name }</p>
                    <p className = 'product-count' > 
                        <span className =  'bold' >Count: </span>
                        <span>{ this.props.count }</span>
                        <span>$</span>
                    </p>
                    <p className ='product-description' >
                        <span className = 'bold' > Description: </span>
                        <span>{ this.props.description }</span>
                    </p>
                    <p className = 'product-remainder' >
                        <span className = 'bold' >Remainder: </span>
                        <span>{ this.props.remainder }</span>
                    </p>
                    <div className = 'button-section' >
                        <button className = 'button' onClick = { this.editItem }>Edit</button>
                        <button className = 'button' onClick = { this.deleteItem }>Delete</button>
                    </div>                    
                </div>
            </li>     
        )   
    }
};

export default Item;