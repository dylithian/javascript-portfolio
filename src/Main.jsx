import React from 'react';
import ReactDOM from 'react-dom';

import {Education} from './Components/Education';
import {Navigation} from './Components/Navigation';
import {Personal} from './Components/Personal';
import {Projects} from './Components/Projects';
import {References} from './Components/References';
import {WorkHistory} from './Components/WorkHistory';

import nativeElements from './CSS Modules/nativeElements.module.css';
import layout from './CSS Modules/layout.module.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'Personal'
        }
    }
    getAppropriateContent() {
        switch(this.state.currentTab) {
            case 'Personal':
                return <Personal />;
                break;
            case 'Work History':
                return <WorkHistory />;
                break;
            case 'Education':
                return <Education />;
                break;
            case 'References':
                return <References />;
                break;
            case 'Projects':
                return <Projects />;
                break;
        }
    }
    buttonClicked = label => { this.setState({currentTab: label}); }
    render() {
        return (
            <div style={{height: '100%'}} className={`${layout.flexColumnNoWrap}`}>
                <Navigation buttonClicked={this.buttonClicked} />
                {this.getAppropriateContent()}
            </div>
        );
    }
}

// Style the entry element because CSS Modules doesn't play nicely with IDs.
document.getElementById('entry').style.height = '100%';
document.getElementById('entry').style.width = '100%';
document.getElementById('entry').style.margin = '0';
document.getElementById('entry').style.padding = '0';

ReactDOM.render(
    <Main />,
    document.getElementById('entry')
);
