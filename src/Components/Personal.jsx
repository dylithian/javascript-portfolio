import React from 'react';

import {BulletList} from './BulletList';
import {Card} from './Card';
import {Content} from './Content';
import {EMSizer} from './EMSizer';
import {FlexCenteredBox} from './FlexCenteredBox';
import {Header} from './Header';
import {NameCard} from './NameCard';
import {TextBlock} from './TextBlock';

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
                            items={['Java','Modern\u00a0JavaScript\u00a0(ES6)','React',
                                    'MySQL','Python','C#'
                            ]}
                        />
                        <TextBlock>Also familiar with Ruby, Lua, PHP, AngularJS, and more.</TextBlock>
                    </FlexCenteredBox>
                    <FlexCenteredBox>
                        <EMSizer size='48'>
                            <TextBlock>
                                My core belief is that learning is a <em>choice</em> and a <em>privilege</em>. Success in the
                                extremely complicated and fast-paced software engineering industry is
                                a function of embracing that chaos and treating the opportunity to
                                expand one’s horizons as a challenge to rise above, not as a chore.
                            </TextBlock>
                        </EMSizer>
                    </FlexCenteredBox>
                </Card>
                <Card>
                    <Header centered>Skills</Header>
                    <BulletList
                        columns="2"
                        items={[
                            `Java${since(2013)}`,`C#${since(2018)}`,`HTML5/CSS3${since(2014)}`,`JavaScript${since(2014)}`,`React\u00a0&\u00a0AngularJS${since(2019)}`,'Python','Lua',
                            `jQuery${since(2014)}`,`PHP${since(2015)}`,'SQL-based\u00a0RDB (Primarily\u00a0MySQL)','Ruby','Management',
                            `Babel & Webpack${since(2020)}`,`NodeJS${since(2019)}`
                        ]}
                    />
                </Card>
                <Card>
                    <Header centered>Personal Strengths</Header>
                    <BulletList
                        columns="2"
                        items={[
                            'Outgoing Personality','Fits well into any group','Comfortable working alone','Self-Starter','Strong Writing and Interpersonal Skills',
                            'Diligent; Unflinching work ethic','Meticulous; Quality producer','Punctual','I was taught proper coding practices','Writes code for readability and maintainability, not just functionality'
                        ]}
                    />
                </Card>
            </Content>
        );
    }
}
