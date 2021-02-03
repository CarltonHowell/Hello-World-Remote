import * as React from 'react';

interface Props {
    text?: string,
}

const HelloComponent = (props: Props) => {

    return(
        <div style={{
            backgroundColor: 'blue',
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 2,
            padding: 100,
            width: 400
            }}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default HelloComponent;