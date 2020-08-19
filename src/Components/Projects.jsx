import React from 'react';

import {Aligner} from './Aligner';
import {Card} from './Card';
import {Content} from './Content';
import {EMSizer} from './EMSizer';
import {Header} from './Header';
import {SubHeader} from './SubHeader';
import {TextBlock} from './TextBlock';

import text from './../CSS Modules/text.module.css';

export class Projects extends React.Component {
    render() {
        return (
            <Content>
                <Card>
                    <h2><Header>Past Projects</Header></h2>
                    <i className={text.centerAlign}>(in no particular order)</i>
                </Card>
                <Card>
                    <Header>Systech Website</Header>
                    <SubHeader>Responsive website built with React. Accessed minor database information with PHP and MySQL.</SubHeader>
                    <EMSizer size='64'>
                        <TextBlock>
                            The construction and maintenance of the Systech website was entirely my responsibility. While it was relatively simple,
                            the process required me to leverage skills I had already developed in order to produce a finished product that would
                            represent the primary online presence of the company. Since I didn't have other team members to rely upon,
                            I had to act essentially as a full-stack developer for the website. While I could have opted for a templating system
                            or a framework like Wordpress, I insisted on the freedom of developing it myself by hand.
                        </TextBlock>
                        <TextBlock>
                            The primary front-end interface for the website was built using React, Babel, and Webpack,
                            and represented my first real project with the framework. My primary focuses were on ease of use, accessibility,
                            a modern and responsive feel, and an adherence to the design stylings of the company itself. Everything from the colors
                            to how the website felt on mobile devices had to be considered, and my highest priority was to make the website feel like
                            something that was designed professionally by a highly-skilled team, rather than something thrown together in a weekend
                            by a mom-and-pop shop that had watched a single tutorial on YouTube.
                        </TextBlock>
                        <TextBlock>
                            The majority of the backend was through PHP requests to our live inventory database, used almost exclusively to provide an
                            up-to-date inventory listing for what physical product we had in the shop, as well as pricing. While I had considered implementing
                            online shopping and a digital payment system, both of those were far less cost-effective than was necessary for a town like Butte.
                            More often than not, what was important was to provide customers with a quick and simple way to see what items we had in-store
                            before they made a trip in the first place. The main reason for this was that we were competing with larger companies like Staples,
                            Walmart, and Amazon, and anything that they could have ordered through us digitally would be easier and more reliable through our
                            competitors. Additionally, there is a large portion of Butte that either doesn't understand technology well enough to be confident
                            in ordering products online, mixed with a significant number of people who don't have the time to wait for something to be delivered.
                        </TextBlock>
                        <TextBlock>
                            The main function of the site was to allow for customers to see our operating hours, prices, and to schedule appointments for more
                            complicated services. We sometimes performed on-site technical support work, and many companies preferred simply getting a quote and
                            waiting for a response rather than trying to figure out details over the phone.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>Systech Internal Inventory App</Header>
                    <SubHeader>Function-first Java application for interacting with a MySQL database for internal parts and services tracking.</SubHeader>
                    <EMSizer size='64'>
                        <TextBlock>
                            I wrote this entire program in Java since it was my strongest language at the time, and the one I was most comfortable with.
                            The purpose of the program was to be as efficient as possible in performing standard SQL CRUD functionality, so the interface was
                            not particularly aesthetically pleasing, nor was it particularly modern-looking. Since I would be responsible for training every user,
                            there was no help documentation, though I did end up having to write 'cheat sheets' for the techs to have on-hand, which
                            taught me a valuable lesson in how important documenting work was.
                        </TextBlock>
                        <TextBlock>
                            The program operated in two modes, Inventory and Work Orders. Inventory was exactly what it sounds like, giving us an accurate listing
                            for every part, computer, software license, and hardware component in the workshop. For those items that were to be listed
                            on the website for sale, the For Sale field of the table had a boolean value to indicate as such.
                            The Work Orders portion had all relevant information for the customer and tech items they brought to us, as well as what services
                            we had performed. This information was all collected at the start of the process with the customer, and then entered into the system
                            after the customer had left our workshop and work had begun.
                        </TextBlock>
                        <TextBlock>
                            The only other noteworthy function was a mode that would dynamically display Work Orders by priority. It used a more complicated
                            algorithm than I think (in hindsight) was necessary, as it tried to heuristically determine what was top priority rather than
                            simply allowing the user to sort by various data sets. This brilliant example of the KISS principle was also a valuable lesson to learn.
                        </TextBlock>
                    </EMSizer>
                </Card>
                <Card>
                    <Header>This Resume & Portfolio</Header>
                    <SubHeader>If you don't know what this is, I'm confused.</SubHeader>
                    <EMSizer size='64'>
                        <TextBlock>
                            This resume is actually my second attempt at such a concept, having made one in the past with jQuery and jQuery UI that nobody was
                            willing to download or view and instead they pestered me for a PDF version of my resume. This was years ago, and with how much has
                            changed about web development in just the past five years, React with Babel and Webpack was the way to go for this version.
                        </TextBlock>
                        <TextBlock>
                            My main priority with this project was to be as true to proper form as possible. This meant having a component for everything,
                            solidly implementing composition rather than polymorphic inheritance, and even using a couple neat things like this.props.children
                            and such. My main priority with this project was to demonstrate, at a glance, that I do in fact know what I'm doing when it comes
                            to the development stack.
                        </TextBlock>
                        <TextBlock>
                            I'd like to emphasize a couple things about this project that I see a lot of employers looking for, and describing as
                            being a big difference between a novice and an intermediate/expert developer:<br></br>
                            Firstly, I developed this project through GitHub for source control, and I'm actually quite familiar with how the general process
                            of using Git and its related apps works. While obviously I haven't had to create issues or workflows for this project, I'm also
                            familiar with those, and I'm fully aware of how instrumental they can be in the efficient operations of a dev team.<br></br>
                            Secondly, I'd like to mention that I developed specifically with readability and maintainability in mind, even though I'm the only
                            one who's going to work on this project. The purpose for this is to show that I understand how helpful it can be to have a project
                            that is easy to follow in the long-term and easy to update in the medium-term. I name my variables either according to convention
                            (loop iterator variables) or usage (<em>columns</em> instead of <em>a</em>, and so on). My components all have descriptive names that
                            operate based on standard MVC coding practices. I'm also a big believer in Unix philosophy, in the sense that if you're going to work
                            on a project, you should focus on doing one thing and doing it well, rather than overcomplicating everything by adding features not
                            within the scope of the original implementation.<br></br>
                            Thirdly, I'd like to mention that I do in fact understand the importance of comments and documentation, largely from having to deal
                            with the alternative in the past and realizing just how difficult it is to get back up to speed on code I'd written months ago if I
                            had to do so without the benefit of comments.
                        </TextBlock>
                        <TextBlock>
                            I'd also like to point out that I'd gotten most of the way through developing this project before I'd realized I could make it look
                            far more modern than I had initially achieved. Such is life.
                        </TextBlock>
                    </EMSizer>
                    <SubHeader>GitHub Repository:</SubHeader>
                    <TextBlock><a href="https://github.com/dylithian/resume">https://github.com/dylithian/resume</a></TextBlock>
                </Card>
                <Card>
                    <Header>Perl Portfolio</Header>
                    <SubHeader>A portfolio of my path to learning Perl</SubHeader>
                    <EMSizer size="64">
                        <TextBlock>
                            In a very basic sense, there isn't a whole lot to say about this project. I decided while learning Perl that I ought to create a
                            GitHub repository for my code, partly so I didn't have to worry about losing it to some sort of data failure, and partly so other
                            people could view the kind of stuff I'd done with it. As it stands, I don't find anything about the portfolio to be particularly
                            impressive or worthy of note, but I will acknowledge that I went a little overboard with comments on this project.
                        </TextBlock>
                        <SubHeader>GitHub Repository</SubHeader>
                        <TextBlock><a href="https://github.com/dylithian/perl-portfolio">https://github.com/dylithian/perl-portfolio</a></TextBlock>
                    </EMSizer>
                </Card>
            </Content>
        );
    }
}
