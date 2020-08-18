import React from 'React';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';
import text from './../CSS Modules/text.module.css';
import effects from './../CSS Modules/effect.module.css';

export class NavButton extends React.Component {
    render() {
        return (
            <button
                className={`${layout.flex1} ${background.blue} ${text.white} ${text.bold} ${text.larger} ${text.sans} ${effects.slightFadeOnHover}`}
                onClick={() => { this.props.onClick(); }}
            >{this.props.label}</button>
        );
    }
}
