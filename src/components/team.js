import React from 'react';
import { Link } from 'react-router-dom';

export default function Team (props) {
    let team = props.team;
    return (
        <div className='team'>
            <Link to={`/teams/${team.id}`}>
                <img src={team.logo} alt={`${team.name}-logo`} />
                <figcaption>{team.name}</figcaption>
            </Link>
        </div>
        
    )
}