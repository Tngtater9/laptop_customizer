import React from 'react';
import Total from './Total.js';
import Options from './Options.js';

class SelectedMenu extends React.Component {

    render () {
        
      
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Options selected={this.props.selected} />
            <Total selected={this.props.selected} />
          </section>
        )
    }
}

export default SelectedMenu
