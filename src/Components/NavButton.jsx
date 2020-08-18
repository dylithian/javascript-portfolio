import React from 'React';

import backgrounds from './../CSS Modules/backgrounds.module.css';
import layouts from './../CSS Modules/layout.module.css';
import text from './../CSS Modules/text.module.css';
import effects from './../CSS Modules/effects.module.css';

export class NavButton extends React.Component {
    render() {
        return (
            <button
                className={`${layouts.flex1} ${backgrounds.blue} ${text.white} ${text.bold} ${text.larger} ${effects.slightFadeOnHover}`}
                onClick={() => { this.props.onClick(); }}
            >{this.props.label}</button>
        );
    }
}
