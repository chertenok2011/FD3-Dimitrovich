import React from 'react';
import PropTypes from 'prop-types';

import './rainbow.css';
import RainbowChild from './rainbow';

class Rainbow extends React.Component {
    static propTypes = {
        colors: PropTypes.array
    }

    render() {
        let colors = this.props.colors
        let color = colors.splice(0,1)[0]        
        let child = null

        if (colors.length > 0) child = <RainbowChild colors= { colors }/>
        
        return (
            <div className = {'border border-' + (color)}>
                {child}
            </div>       
        )
    }
}
export default Rainbow;