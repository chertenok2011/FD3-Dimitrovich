import React from 'react';
import PropTypes from 'prop-types';

import './rainbow.css';

class Rainbow extends React.Component {
    static propTypes = {
        colors: PropTypes.array
    }

    render() {        
        let colors = this.props.colors
        let child = this.props.children

        for (let i=0; i<colors.length; i++) {
            child = <div className = {'border border-' + (colors[i])}>{ child }</div>
        }

        return child
    }
}
export default Rainbow;