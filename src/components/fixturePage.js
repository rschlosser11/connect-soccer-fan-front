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
        console.log(this.props)
        let fixture = this.props.fixtures.find(fix => fix.id === Number.parseInt(this.props.match.params.id));
        console.log(fixture)
        return (
            <Container>
                <h1>{fixture.home_team.name} vs. {fixture.away_team.name}</h1>
                <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
                    <Tab eventKey='home' title='Home'></Tab>
                    <Tab eventKey='lineups' title='Starting Lineups'></Tab>
                </Tabs>
            </Container>
        )
    }
}

export default FixturePage;
