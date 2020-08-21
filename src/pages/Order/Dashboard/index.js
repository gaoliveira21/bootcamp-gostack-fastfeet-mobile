import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import OrderItem from '../OrderItem';

import {
  Container,
  Header,
  UserInfo,
  Avatar,
  UserText,
  Name,
  PageTitle,
  Title,
  Filters,
  FilterText,
} from './styles';

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
        <Icon name="logout" color="#E74040" size={24} />
      </Header>

      <PageTitle>
        <Title>Entregas</Title>
        <Filters>
          <FilterText active>Pendentes</FilterText>
          <Text>{'  '}</Text>
          <FilterText>Entregues</FilterText>
        </Filters>
      </PageTitle>

      <OrderItem />
    </Container>
  );
};

export default Dashboard;
