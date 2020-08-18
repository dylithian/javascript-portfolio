import React from 'react';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Content extends React.Component {
    render() {
        return (
            <div className={`${layout.flex1} ${layout.flexColumnNoWrap} ${layout.spaceBetween} ${layout.slightPadding} ${background.offWhite}`}>
                {this.props.children}
            </div>
        );
    }
}
