import React from 'react';
import Li from './Li';

export default props => (
    <ul className={props.class}>
        {props.children}
    </ul>
)