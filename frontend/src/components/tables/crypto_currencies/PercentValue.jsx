import React from 'react';

const PercentValue = (props) => {
    const description = props.description ? ` (${props.description})` : ''
    const color = props.data > 0 ? {color: 'green'} : {color: 'red'}

    return (
            <span style={{...props.style, ...color}}>
                {props.data.toFixed(2)}%
                {description}
            </span>
    )
};

export default PercentValue;
