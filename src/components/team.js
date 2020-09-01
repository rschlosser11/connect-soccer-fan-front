import React from 'react';

export default function Team (props) {
    let team = props.team;
    return (
        <div className='team'>
            <img src={team.logo} alt={`${team.name}-logo`} />
            <figcaption>{team.name}</figcaption>
        </div>
        
    )
}