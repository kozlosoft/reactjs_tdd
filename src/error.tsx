import React from 'react';

interface Props {
    active: boolean,
}

class Error extends React.Component<Props, {}> {
    render() {
        return (
            <div className={this.props.active ? 'open-error' : 'error'}>
            </div>
        );
    }
}

export default Error;
