import React from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';

function Fixture (props) {
    let fixture = props.fixture;
    let date = moment(fixture.event_date);
    console.log(date < moment())
    return (
        <tr>
            {date > moment() ? <td>{`${date.format('MMM')} ${date.get('date')} ${date.format('h:mm A')} `}</td> : <td>{`${fixture.goalsHomeTeam} - ${fixture.goalsAwayTeam}`}</td>}
            <td>{fixture['home_team']['name']}</td>
            <td>{fixture['away_team']['name']}</td>
            <td>{fixture.venue}</td>
            <td><Button variant='primary'>See More</Button></td>
        </tr>
    )
}

export default Fixture