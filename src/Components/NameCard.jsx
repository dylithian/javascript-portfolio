import React from 'react';

import {Card} from './Card';
import {Header} from './Header';
import {SubHeader} from './SubHeader';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';
import text from './../CSS Modules/text.module.css';


export class NameCard extends React.Component {
    render() {
        return (
            <div className={`${background.white} ${layout.slightPadding} ${layout.flexColumnNoWrap} ${layout.bottomMargin} ${layout.shadowAsCard} ${layout.centerItems} ${layout.standardCard}`}>
                <h2><Header>Robert Steffler</Header></h2>
                <h3><SubHeader>(406)-498-7937</SubHeader></h3>
                <h3><SubHeader>bobbysteffler@gmail.com</SubHeader></h3>
                <h5><a href="Resume.pdf" download>Download this Resume as a PDF</a></h5>
            </div>
        );
    }
}
