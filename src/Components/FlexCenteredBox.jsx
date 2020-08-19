import React from 'react';

import layout from './../CSS Modules/layout.module.css';

export class FlexCenteredBox extends React.Component {
    render() {
        return (
            <div style={{flex: `${this.props.flex}`}} className={`${layout.alignSelfCenter}`}>
                {this.props.children}
            </div>
        );
    }
}
