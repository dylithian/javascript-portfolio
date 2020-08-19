import React from 'react';

import {Aligner} from './Aligner';
import {BulletList} from './BulletList';
import {Card} from './Card';
import {Content} from './Content';
import {FlexCenteredBox} from './FlexCenteredBox';
import {Header} from './Header';
import {NameCard} from './NameCard';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Personal extends React.Component {
    since(year) {
        let years = new Date().getFullYear() - year;
        if(years == 0) {
            return '';
        } else if(years == 1) {
            return ' (1 Year)';
        } else if(years <= 10) {
            return ` (${years} Years)`
        } else {
            return ` (10+ Years)`
        }
    }
    render() {
        let since = this.since; // For semantic reasons.
        return (
            <Content>
                <NameCard />
                <Card>
                    <FlexCenteredBox>
                        <TextBlock>Experienced Software Developer with primary focus on:</TextBlock>
                        <BulletList
                            columns="2"
                            items={['Java','Modern JavaScript (ES6)','React',
                                    'MySQL','Python','C#'
                            ]}
                        />
                        <TextBlock>Also familiar with Ruby, Lua, PHP, AngularJS, and more.</TextBlock>
                    </FlexCenteredBox>
                    <FlexCenteredBox>
                        <div style={{maxWidth: '32em'}}>
                            <TextBlock>
                                My core belief is that learning is a <em>choice</em> and a <em>privilege</em>. Success in the
                                extremely complicated and fast-paced software engineering industry is
                                a function of embracing that chaos and treating the opportunity to
                                expand one’s horizons as a challenge to rise above, not as a chore.
                            </TextBlock>
                        </div>
                    </FlexCenteredBox>
                </Card>
                <Card>
                    <Header centered>Skills</Header>
                    <BulletList
                        columns="2"
                        items={[
                            `Java${since(2013)}`,`C#${since(2018)}`,`HTML5/CSS3${since(2014)}`,`JavaScript${since(2014)}`,`React & AngularJS${since(2019)}`,'Python','Lua',
                            `jQuery${since(2014)}`,`PHP${since(2015)}`,'SQL-based RDB (Primarily MySQL)','Ruby','Management'
                        ]}
                    />
                </Card>
                <Card>
                    <Header>Personal Strengths</Header>
                    <BulletList
                        columns="2"
                        items={[
                            'Outgoing Personality','Fits well into any group','Comfortable working alone','Self-Starter','Strong Writing and Interpersonal Skills',
                            'Diligent; Unflinching work ethic','Meticulous; Quality producer','Punctual'
                        ]}
                    />
                </Card>
            </Content>
        );
    }
}
