import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import CommentContainer from './commentContainer';

function FixturePage (props) {
    let fixture = props.fixtures.find(fix => fix.id === parseInt(props.match.params.id))
    return (
        <Container>
            <h1>{fixture.home_team.name} vs. {fixture.away_team.name}</h1>
            <Tabs defaultActiveKey='chat' id='uncontrolled-tab-example'>
                <Tab eventKey='chat' title='Chat'>
                    <Container>
                        <CommentContainer fixutre={fixture} comments={props.comments} />
                    </Container>
                </Tab>
                <Tab eventKey='lineups' title='Starting Lineups'></Tab>
            </Tabs>
        </Container>
    )
}

export default FixturePage;
