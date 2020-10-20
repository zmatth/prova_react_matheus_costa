import React from 'react';


export default props => (
    <nav aria-label={props.labelType}>
        <ol className={props.olClass}>
            {props.children}
        </ol>
    </nav>
        
)