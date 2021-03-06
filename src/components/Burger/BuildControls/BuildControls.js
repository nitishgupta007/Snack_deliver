import React from 'react';
import BuildControl from './BuildControl/Buildcontrol';
import './BuildControls.css';

const controls = [
    { label:'Salad', type:'salad' },
    { label:'Bacon', type:'bacon' },
    { label:'Cheese', type:'cheese' },
    { label:'Meat', type:'meat' }
];

const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientsAdded(ctrl.type)}
            remove={() => props.ingredientsRemove(ctrl.type)} />
        ))}
    </div>
);

export default buildControls;