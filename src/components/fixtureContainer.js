import React from 'react';
import Fixture from './fixture';
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function FixturesContainer ({ fixtures }) {
    return (
        <Container>
            <Table striped bordered hover className='fixtures-table'>
                <thead>
                    <tr>
                        <th>Time/Result</th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Venue</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {fixtures.map(fixture => <Fixture className='fixture' key={fixture.fixture_id} fixture={fixture} />)}
                </tbody>
            </Table>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        fixtures: state.fixtures,
    }
}

export default connect(mapStateToProps)(FixturesContainer)