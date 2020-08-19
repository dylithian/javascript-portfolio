import React from 'react';

export class EMSizer extends React.Component {
    render() {
        return (
            <div style={{maxWidth: `${this.props.size}em`}}>
                {this.props.children}
            </div>
        );
    }
}
