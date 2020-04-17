import React from 'react';
import Parts from './Parts'


function Spec (props) {
    const features = Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
       return (<Parts key={featureHash}
        features={props.features} 
        feature={feature} 
        index={idx} 
        update={props.update} 
        selected={props.selected}/>)
       });

      return <fieldset className="feature">
        {features}
    </fieldset>;
}

export default Spec