import React from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Fixture (props) {
    let fixture = props.fixture;
    let date = moment(fixture.event_date);
    return (
        <tr>
            {date > moment() ? <td>{`${date.format('MMM')} ${date.get('date')} ${date.format('h:mm A')} `}</td> : <td>{`${fixture.goalsHomeTeam} - ${fixture.goalsAwayTeam}`}</td>}
            <td>{fixture['home_team']['name']}</td>
            <td>{fixture['away_team']['name']}</td>
            <td>{fixture.venue}</td>
            <td>
                <Link to={`/fixtures/${fixture.id}`}>
                    <Button variant='primary'>See More</Button>
                </Link>
            </td>
        </tr>
    )
}

export default Fixture