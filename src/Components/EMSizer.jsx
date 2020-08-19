import React from 'react';

// This is a formatting component that constrains components that would otherwise expand to be wider to within a certain EM size range.
export class EMSizer extends React.Component {
    render() {
        return (
            <div style={{maxWidth: `${this.props.size}em`}}>
                {this.props.children}
            </div>
        );
    }
}
