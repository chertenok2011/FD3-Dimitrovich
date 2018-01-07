import React from 'react';
import PropTypes from 'prop-types';

import './filter.less';

class Filter extends React.PureComponent {

    static propTypes = {
        option: PropTypes.shape({
            title: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired
        })
    };

    state = {
        title: this.props.option.title,
        code: this.props.option.code
    };

    render() {
        console.log('Filters ' + this.state.code + ' render');

        return (
            <option key={this.state.code}>{this.state.title}</option>
        );
    }
}

export default Filter;