import React from 'react';

interface Props {
    active: boolean,
}

class Error extends React.Component<Props, {}> {
    render() {
        return (
            <div className='open-error'>
            </div>
        );
    }
}

export default Error;
