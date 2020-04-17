import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import {USCurrencyFormat} from './App.js';

class Parts extends React.Component{

render () {
  const items = this.props.features[this.props.feature];
    
  const options = items.map(item =>{ 
    const itemHash = slugify(JSON.stringify(item));
      return (<div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(this.props.feature)}
        checked={item.name === this.props.selected[this.props.feature].name}
        onChange={e => this.props.update(this.props.feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>)
  });
    
  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{this.props.feature}</h3>
      </legend>
      {options}
    </fieldset>
    );
  }
}

export default Parts