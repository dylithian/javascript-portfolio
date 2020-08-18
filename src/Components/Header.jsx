import React from 'react';

import text from './../CSS Modules/text.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Header extends React.Component {
    render() {
        return (
            <div className={`${layout.slightPadding} ${text.black} ${text.bold} ${text.larger}`}>
                {this.props.children}
            </div>
        );
    }
}
