import React from 'react';

export default props => (
    <>
    {/* // Bar Chart */}
<div className={props.class1}>{props.nomeTopo}</div>
    {/* //Card Body */}
    <div className={props.class2}>
        <div id={props.idContainer}>
            <canvas id={props.idCanvas}></canvas>
        </div>
    </div>
    {/* Updated At */}
<div className={props.class3}>{props.textoUpdate}</div>
    </>
)