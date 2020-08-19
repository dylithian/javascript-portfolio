import React from 'react';

import {Aligner} from './Aligner';
import {Card} from './Card';
import {Content} from './Content';
import {EMSizer} from './EMSizer';
import {Header} from './Header';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

export class WorkHistory extends React.Component {
    render() {
        return (
            <Content>
                <Card>
                    <h2><Header>Employment History</Header></h2>
                </Card>
                <Card>
                    <Header>Denny Menholt Ford</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            IT Manager<br></br>
                            Butte, MT
                        </Aligner>
                        <Aligner align='right'>
                            March 2020 - Present
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            Primarily a systems administrator role, where I was the top authority for all computers and
                            network devices for the largest dealership in the entirety of Butte-Silverbow county.
                        </TextBlock>
                        <TextBlock>
                            Managed the entire tech department and acted as the webmaster, network and server administrator,
                            hardware acquisition and installation manager, and primary tech support employee.
                        </TextBlock>
                        <TextBlock>
                            Hardware setup included a full domain-administrated network layout with multiple distinct LANs,
                            more than 100 computers, 25+ printers, and several routers and intermediate switches.
                        </TextBlock>
                        <TextBlock>
                            Performed various inventory management, pricing maintenance, and administration roles when time was available.
                        </TextBlock>
                        <TextBlock>
                            Also included a social media management component, including marketing and design presence on Facebook, Google, Indeed, and more.
                            Acted additionally as the company administrator for the Microsoft 365 domain.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Systech</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Manager/Tech Lead<br></br>
                            Butte, MT
                        </Aligner>
                        <Aligner align='right'>
                            2019 - April 2020
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            In essence, the assistant manager and CFO for a small computer repair shop business.
                        </TextBlock>
                        <TextBlock>
                            Ran a tech repair shop with a significant media presence and inventory/parts component.
                            Job responsibilities on a daily basis included running a tech team of 3-4 technicians repairing approximately 6-10 machines at a time,
                            providing excellent customer service, performing financial transactions and bookkeeping, managing inventory and ordering parts,
                            interacting with vendors, and occasional business-to-business interaction.
                        </TextBlock>
                        <TextBlock>
                            Occasionally involved programming knowledge as the situation needed.
                            Built numerous internal-use scripts, primarily in Python, Ruby, and JavaScript.
                        </TextBlock>
                        <TextBlock>
                            I also built the entirety of Systech's website and internal inventory management program from the ground up,
                            including an ES6 JavaScript + React frontend and a PHP+MySQL backend.
                            The inventory management system was built to be extensible, responsive, modular, and straightforward.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Staples</Header>
                    <SubHeader>
                        <Aligner align='left'>
                            Certified Technician (Later Tech Sales)<br></br>
                            Butte, MT
                        </Aligner>
                        <Aligner align='right'>
                            2017 - March 2020
                        </Aligner>
                    </SubHeader>
                    <EMSizer size='48'>
                        <TextBlock>
                            In brief, an entry-level sales associate position with a mix of sales and technical expertise components.
                        </TextBlock>
                        <TextBlock>
                            Hired on as a Certified Technician after passing Staples' internal certification exam (twice),
                            and then performed tech repair and sales work for the tech department in the Butte Store.
                            Tasks included repair work of all kinds on current and legacy Windows machines, and expertise
                            (though not in the job description) was required in networking, mobile devices including phones and tablets,
                            GPS systems, printers, and home security systems. Also involved a heavy sales component in which I was number 2 in the store,
                            as well as #1 in the entire chain for employees in my position, based on sales performance.
                        </TextBlock>
                        <TextBlock>
                            The position later stopped requiring recertification and became a Tech Sales Associate position.
                        </TextBlock>
                        <TextBlock>
                            I became cross-trained (voluntarily) in the print & marketing center which included print shop work as well as graphic design.
                            I also was cross-trained in inventory management and received approximately one year of management training,
                            and essentially acted as a manager in every capacity aside from the job title.
                        </TextBlock>
                    </EMSizer>
                </Card>
            </Content>
        );
    }
}
