import React from 'react';

import {Card} from './Card';
import {Content} from './Content';
import {Header} from './Header';

export class WorkHistory extends React.Component {
    render() {
        return (
            <Content>
                <Card>
                    <h2><Header>Employment History</Header></h2>
                </Card>
            </Content>
        );
    }
}
