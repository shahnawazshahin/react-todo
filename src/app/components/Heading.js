import React, { Component } from 'react';

import Container from '../libs/Container';
import Logo from '../libs/Logo';
import Title from '../libs/Title';

class Heading extends Component {
    render() {
        return (
            <Container>
                <Logo alt="logo" />
                <Title name="Welcome to the React Todo app" />
            </Container>
        );
    }
}

export default Heading;