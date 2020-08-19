import React from 'react';

import {Aligner} from './Aligner';
import {Card} from './Card';
import {Content} from './Content';
import {EMSizer} from './EMSizer';
import {Header} from './Header';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

export class References extends React.Component {
    render() {
        return (
            <Content>
                <Card>
                    <h2><Header>Professional References</Header></h2>
                </Card>
                <Card>
                    <Header>Chris Bodenberger</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            General Manager<br></br>
                            Systech
                        </Aligner>
                        <Aligner align='right'>
                            Phone: (406)-498-8559
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Chris was my direct manager at Systech, and ran the company as a whole.
                            I performed any tasks he gave me and managed a team of employees to complete any projects required.
                            I provided him with daily, weekly, and monthly reports on my progress and the progress of the team.
                            Given the nature of my work, he was also directly aware of any issues that may have arisen, and my
                            performance was directly subject to his review.
                        </TextBlock>
                        <TextBlock>
                            I acted as General Manager in his stead on the occasion that he was not present.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>CaLinda Roth</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Office Manager<br></br>
                            Systech
                        </Aligner>
                        <Aligner align='right'>
                            Phone: (206)-778-4981
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            CaLinda was our Office Manager, who was my direct subordinate and largely responsible for our bookkeeping work and social media.
                            I was responsible for ensuring that her work reached the General Manager and for assigning her tasks that helped us meet company goals
                            for growth and service excellence. I synthesized the information she provided in order to prepare the reports the General Manager received.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Todd Gasser</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            General Manager<br></br>
                            Staples
                        </Aligner>
                        <Aligner align='right'>
                            Personal Phone: (406)-490-9274<br></br>
                            Business Phone: (406)-494-1000
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Todd is the store manager at Staples in Butte.
                            He supervises the entire store and is directly accountable to the District Manager.
                            Todd was responsible for hiring me, assigning training, as well as directing all my direct supervisors.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Todd Gasser</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Print and Marketing Supervisor<br></br>
                            Staples
                        </Aligner>
                        <Aligner align='right'>
                            Phone: (406)-498-7112
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Travis managed the Copy and Print Center at Staples in Butte.
                            He was responsible for training me in the operations and general procedures of the print center,
                            and while he left Staples before I did, he was one of my close mentors 
                            and is very appraised of my working abilities and credentials.
                        </TextBlock>
                    </EMSizer>
                </Card>
            </Content>
        );
    }
}
