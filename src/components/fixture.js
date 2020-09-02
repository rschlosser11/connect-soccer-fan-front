import React from 'react';
import moment from 'moment';

function Fixture (props) {
    let fixture = props.fixture;
    let date = moment(fixture.event_date);
    return (
        <tr>
            <td>{`${date.format('MMM')} ${date.get('date')} ${date.format('h:mm A')} `}</td>
            <td>{fixture['home_team']['name']}</td>
            <td>{fixture['away_team']['name']}</td>
            <td>{fixture.venue}</td>
        </tr>
    )
}

export default Fixture