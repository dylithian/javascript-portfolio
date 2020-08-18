import React from 'React';

import {NavButton} from './NavButton';

import backgrounds from './../CSS Modules/backgrounds.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Navigation extends React.Component {
    render() {
        return (
            <div className={`${layout.flexRowWithWrap} ${layout.fullWidth} ${layout.flex1} ${backgrounds.darkBlue}`}>
                <NavButton label={'Personal'} onClick={() => { this.props.buttonClicked('Personal'); }}/>
                <NavButton label={'Work\u00a0History'} onClick={() => { this.props.buttonClicked('Work History'); }}/>
                <NavButton label={'Education'} onClick={() => { this.props.buttonClicked('Education'); }}/>
                <NavButton label={'References'} onClick={() => { this.props.buttonClicked('References'); }}/>
                <NavButton label={'Projects'} onClick={() => { this.props.buttonClicked('Projects'); }}/>
            </div>
        );
    }
}
