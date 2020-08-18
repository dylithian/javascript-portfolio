import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from './Components/Navigation';

import nativeElements from './CSS Modules/nativeElements.module.css';
import layout from './CSS Modules/layout.module.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'Personal'
        }
    }
    buttonClicked = label => { this.setState({currentTab: label}); }
    render() {
        return (
            <div className={`${layout.flexColumnNoWrap}`}>
                <Navigation buttonClicked={this.buttonClicked}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('entry')
);
