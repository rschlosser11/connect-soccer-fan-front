import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function homepage () {
    return (
        <Container>
            <h1>Welcome to Soccer Fan Connect!</h1>
            <p>Since the pandemic, many sporting events have been played behind closed doors and, while fans can usually watch from their homes, the experience is not the same. There's no connecting with fellow fans at a match or in a pub. No way to celebrate victories together or commiserate loses. Now there's Soccer Fan Connect!</p>
            <p>Soccer Fan Connect allows you to begin a chat on a live game, to connect with other fans and get a little bit of the match-day experience back.</p>
            <p>You must <Link to='/signup'>sign up</Link> to participate in the conversation. Enjoy the beautiful game!</p>
        </Container>
    )
}