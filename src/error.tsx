import React from 'react';

interface Props {
    active: boolean,
}

class Error extends React.Component<Props, {}> {
    private readonly maxHeightInactive: string = "40px";

    render() {
        return (
            <div
                className={this.props.active ? 'open-error' : 'error'}
                style={{
                    maxHeight: this.maxHeightInactive
                }}>
            </div>
        );
    }
}

export default Error;
