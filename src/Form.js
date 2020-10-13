import React, { Component } from 'react';
import Features from './Features';
import FEATURES from './FeaturesObject';

class Form extends Component {
    static defaultProps = {
      selected: {},
      features: {}
    }

    render() {
        return(
            <form className='main__form'>
                <h2>Customize your Laptop</h2>
                <Features features={FEATURES} selected={this.props.selected} updateFeature={this.props.updateFeature} />
            </form>
        );
    }
}

export default Form;