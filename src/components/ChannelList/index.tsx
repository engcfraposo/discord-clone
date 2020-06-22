import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from "../ChannelButton";

const ServerName: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text Channels</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton selected channelName="discord" />
            <ChannelButton channelName="game" />
            <ChannelButton channelName="rocketseat" />
            <ChannelButton channelName="react" />
        </Container>
    )
};

export default ServerName;
