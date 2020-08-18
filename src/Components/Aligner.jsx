import React from 'react';

import text from './../CSS Modules/text.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Aligner extends React.Component {
    getAlignment() {
        switch(this.props.align.toLowerCase()) {
            case 'left':
                return text.leftAlign;
                break;
            case 'right':
                return text.rightAlign;
                break;
        }
    }
    render() {
        return (
            <span className={`${layout.flex1} ${this.getAlignment()}`}>{this.props.children}</span>
        );
    }
}
