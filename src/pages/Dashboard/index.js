import React from 'react';
import { Text } from 'react-native';

import { Container, Header, UserInfo, Avatar, UserText, Name } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatars/285/gabriel.png',
            }}
          />
          <UserText>
            Bem vindo de volta, {'\n'}
            <Name>Gabriel José</Name>
          </UserText>
        </UserInfo>
        <Text>Sair</Text>
      </Header>
    </Container>
  );
};

export default Dashboard;
