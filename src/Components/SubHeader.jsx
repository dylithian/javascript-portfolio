import React from 'react';

import text from './../CSS Modules/text.module.css';
import layout from './../CSS Modules/layout.module.css';

export class SubHeader extends React.Component {
    render() {
        return (
            <div className={`${layout.slightPadding} ${layout.flexRowNoWrap} ${text.black} ${text.italic}`}>
                {this.props.children}
            </div>
        );
    }
}
