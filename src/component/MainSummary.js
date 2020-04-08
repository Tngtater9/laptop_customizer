import React from 'react';
import Total from './Total.js';
import Summary from './Options.js';

class SelectedMenu extends React.Component {

    render () {
        
      
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.props.selected} />
            <Total selected={this.props.selected} />
          </section>
        )
    }
}

export default SelectedMenu
