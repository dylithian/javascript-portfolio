import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from './Components/Navigation';

import nativeElements from './CSS Modules/nativeElements.module.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'Personal'
        }
    }
    buttonClicked = label => { this.setState({currentTab: label}); }
    render() {
        return <Navigation buttonClicked={this.buttonClicked}/>;
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('entry')
);
