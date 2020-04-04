import React from 'react';
import Features from './Features.js';

class FeatureMenu extends React.Component {
render () {
    
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features features={this.props.features} selected={this.props.selected} update={this.props.update} />
          </form>
    )
}
}

export default FeatureMenu