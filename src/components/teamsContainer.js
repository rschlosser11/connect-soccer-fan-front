import React from 'react';
import Team from './team';
import { Container } from 'react-bootstrap';

export default function TeamsContainer (props) {
    let teams = props.teams;
    return (
        <Container>
            <div className='teams-container'>
                {teams.map(team => <Team className='team' key={team.team_id} team={team} />)}
            </div>
        </Container>
    )
}