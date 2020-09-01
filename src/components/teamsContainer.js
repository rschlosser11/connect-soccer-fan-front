import React from 'react';
import Team from './team';

export default function TeamsContainer (props) {
    let teams = props.teams;
    return (
        <div className='teams-container'>
            {teams.map(team => <Team className='team' key={team.team_id} team={team} />)}
        </div>
    )
}