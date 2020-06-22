
import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>discord</Title>

            <Separator/>

            <Description>An open channel so you can tell me if is good</Description>
        </Container>
    )
};

export default ChannelInfo;
