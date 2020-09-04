import React from 'react';
import { Container, Tabs, Tab, Image, Row, Col, CardColumns } from 'react-bootstrap';
import Player from './player'

export default function TeamPage (props) {
    let id = parseInt(props.match.params.teamId)
    let team = props.teams.find(team => team.id === id) 
    let players = props.players.filter(player => player.team_id === id)
    console.log('in team page')
    return (
        <Container>
            <Row>
                <Col md='5'></Col>
                <Col><Image src={team.logo}  /></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col><h1>{team.name}</h1></Col>
                <Col></Col>
            </Row>
            <Tabs defaultActiveKey='players' id='uncontrolled-tab-example'>
                <Tab eventKey='players' title='First Team Squad'>
                    <CardColumns>
                        {players.map(player => <Player player={player} />)}
                    </CardColumns>
                </Tab>
                <Tab eventKey='stats' title='Stats'></Tab>
            </Tabs>
        </Container>
    )
}