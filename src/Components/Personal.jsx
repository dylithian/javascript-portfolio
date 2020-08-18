import React from 'react';

import {Aligner} from './Aligner';
import {Card} from './Card';
import {Content} from './Content';
import {Header} from './Header';
import {NameCard} from './NameCard';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

import background from './../CSS Modules/background.module.css';
import layout from './../CSS Modules/layout.module.css';

export class Personal extends React.Component {
    render() {
        return (
            <Content>
                <NameCard />
                <Card>
                    <Header>Placeholder Content:</Header>
                    <SubHeader>
                        <Aligner align='left'>Left Text</Aligner>
                        <Aligner align='right'>Right Text<br></br>RightTwo</Aligner>
                    </SubHeader>
                    <TextBlock>Posuere urna nec tincidunt praesent semper feugiat nibh sed. Morbi tincidunt augue interdum velit euismod in. Egestas integer eget aliquet nibh praesent. Sapien eget mi proin sed libero enim sed faucibus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Eu mi bibendum neque egestas. Eu volutpat odio facilisis mauris sit amet massa. Lorem donec massa sapien faucibus et molestie. Sed id semper risus in hendrerit gravida rutrum quisque non.</TextBlock>
                    <TextBlock />
                    <TextBlock>Donec massa sapien faucibus et molestie. Sed enim ut sem viverra aliquet eget sit amet. Aliquam ultrices sagittis orci a. Lorem sed risus ultricies tristique nulla. Semper eget duis at tellus at urna. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Metus dictum at tempor commodo ullamcorper. Interdum consectetur libero id faucibus nisl. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Laoreet sit amet cursus sit amet dictum sit amet justo. Ornare quam viverra orci sagittis eu volutpat odio. Iaculis at erat pellentesque adipiscing commodo elit at. Congue eu consequat ac felis donec. Sodales ut etiam sit amet nisl purus in mollis nunc. Amet dictum sit amet justo donec enim diam. Sit amet risus nullam eget felis eget nunc lobortis. Commodo quis imperdiet massa tincidunt.</TextBlock>
                    <TextBlock />
                    <TextBlock>Nunc sed augue lacus viverra vitae congue. Amet tellus cras adipiscing enim eu. Eget nunc scelerisque viverra mauris in aliquam sem. At quis risus sed vulputate odio ut enim blandit. Enim diam vulputate ut pharetra. Ut consequat semper viverra nam libero justo laoreet sit amet. Malesuada fames ac turpis egestas maecenas. Nunc congue nisi vitae suscipit tellus. Non consectetur a erat nam. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Et netus et malesuada fames ac turpis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nisl purus in mollis nunc sed. Tincidunt id aliquet risus feugiat in. Nibh praesent tristique magna sit amet. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Volutpat ac tincidunt vitae semper quis lectus. Sed augue lacus viverra vitae.</TextBlock>
                    <TextBlock />
                    <TextBlock>Facilisis magna etiam tempor orci eu lobortis elementum nibh. Odio euismod lacinia at quis risus sed vulputate. Id semper risus in hendrerit. Posuere urna nec tincidunt praesent semper feugiat nibh. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus et magnis dis parturient montes nascetur. Gravida cum sociis natoque penatibus et. Aliquam malesuada bibendum arcu vitae elementum curabitur. Diam maecenas sed enim ut.</TextBlock>
                </Card>
            </Content>
        );
    }
}
