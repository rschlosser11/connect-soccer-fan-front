import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

class FixturePage extends React.Component {
    state = {
        status: '',
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        elapsed: 0,
    }

    render() {
        let fixture = this.props.fixture;
        return (
            <Container>
                <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
                    <Tab eventKey='home' title='Home'></Tab>
                    <Tab eventKey='lineups' title='Starting Lineups'></Tab>
                </Tabs>
            </Container>
        )
    }
}

export default FixturePage;
