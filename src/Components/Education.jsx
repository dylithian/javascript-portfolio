import React from 'react';

import {Aligner} from './Aligner';
import {Card} from './Card';
import {Content} from './Content';
import {EMSizer} from './EMSizer';
import {Header} from './Header';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

export class Education extends React.Component {
    render() {
        return (
            <Content>
                <Card>
                    <h2><Header>Education</Header></h2>
                </Card>
                <Card>
                    <Header>Green River College</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Computer Science Major<br></br>
                            Auburn, WA
                        </Aligner>
                        <Aligner align='right'>
                            GPA 4.0
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Studied toward an Associates Degree in Computer Science and Information Technology.
                            Had to leave for personal reasons while only two credits away from the full degree.
                            The two credits were electives, not core class credits.
                        </TextBlock>
                        <TextBlock>
                            The program emphasized technical writing on top of standard software development and mathematics.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Tahoma Senior High School</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Graduated with Distinguished Honors<br></br>
                            Covington, WA
                        </Aligner>
                        <Aligner align='right'>
                            GPA 3.833
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Took part in several AP classes, the most notable of which was one year of education with Java programming,
                            and one additional year of extended Java development through a program with the University of Washington.
                        </TextBlock>
                        <TextBlock>
                            Participated in multiple extra-curricular activities including leading the Programming Club
                            in senior year as well as other social activity clubs throughout earlier years.
                        </TextBlock>
                        <TextBlock>
                            Graduated with Distinguished (highest) Honors for exemplary academic performance.
                        </TextBlock>
                        <TextBlock>
                            School later became a middle school.
                        </TextBlock>
                    </EMSizer>
                </Card>
            </Content>
        );
    }
}
