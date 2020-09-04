import React from 'react';
import { Card } from 'react-bootstrap';


export default function Player ({ player }) {
    return (
        <Card style={{ width: '18em' }}>
            <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                    <strong>Position:</strong> {player.position} <br />
                    <strong>Nationality:</strong> {player.nationality} <br />
                    <strong>Birth Date:</strong> {player.birthdate} <br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}