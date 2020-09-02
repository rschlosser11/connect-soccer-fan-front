import React from 'react';
import Fixture from './fixture';
import { Table } from 'react-bootstrap'

export default function FixturesContainer (props) {
    let fixtures = props.fixtures;
    return (
        <Table striped bordered hover className='fixtures-table'>
            <thead>
                <tr>
                    <th>Time/Result</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Venue</th>
                </tr>
            </thead>
            <tbody>
                {fixtures.map(fixture => <Fixture className='fixture' key={fixture.fixture_id} fixture={fixture} />)}
            </tbody>
            
        </Table>
    )
}