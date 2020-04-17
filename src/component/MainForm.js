import React from 'react';
import Spec from './Specs.js';

class FeatureMenu extends React.Component {
render () {
    
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Spec features={this.props.features} selected={this.props.selected} update={this.props.update} />
          </form>
    )
}
}

export default FeatureMenu