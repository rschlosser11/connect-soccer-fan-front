import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import ChatForm from './chatForm';

class FixturePage extends React.Component {
    state = {
        fixture: this.props.fixtures.find(fix => fix.id === parseInt(this.props.match.params.id)),
        comments: []
    }

    render() {
        let fixture = this.state.fixture
        return (
            <Container>
                <h1>{fixture.home_team.name} vs. {fixture.away_team.name}</h1>
                <Tabs defaultActiveKey='chat' id='uncontrolled-tab-example'>
                    <Tab eventKey='chat' title='Chat'>
                        <Container>
                            <ChatForm fixture={this.state.fixture} />
                        </Container>
                    </Tab>
                    <Tab eventKey='lineups' title='Starting Lineups'></Tab>
                </Tabs>
            </Container>
        )
    }
}

export default FixturePage;
