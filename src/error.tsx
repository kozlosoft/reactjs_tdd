import React from 'react';

interface Props {
    active: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

class Error extends React.Component<Props, {}> {
    private readonly maxHeightInactive: string = "40px";

    render() {
        return (
            <div
                className={this.props.active ? 'open-error' : 'error'}
                style={{
                    maxHeight: this.maxHeightInactive
                }}
                onClick={this.props.onClick}>
            </div>
        );
    }
}

export default Error;
