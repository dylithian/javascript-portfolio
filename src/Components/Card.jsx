import React from 'react';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';
import text from './../CSS Modules/text.module.css';

export class Card extends React.Component {
    render() {
        return (
            <div className={`${background.white} ${layout.slightPadding} ${layout.shadowAsCard} ${layout.standardCard}`}>
                {this.props.children}
            </div>
        );
    }
}
