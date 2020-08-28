import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Header';

import {
  Container,
  DeliveryInfo,
  DeliveryStatus,
  TitleRow,
  Title,
  Label,
  Value,
  ContentRow,
  Col,
  Actions,
  ActionBlock,
  ActionText,
} from './styles';

const OrderDetails = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <DeliveryInfo>
        <TitleRow>
          <Icon name="truck" size={24} color="#7D40E7" />
          <Title>Informações da entrega</Title>
        </TitleRow>
        <Label>Destinatário</Label>
        <Value>Vinicius Bueno</Value>

        <Label>Endereço de entrega</Label>
        <Value>Rua Beethoven, 1898, Diadema - SP, 0996-580</Value>

        <Label>Produto</Label>
        <Value>Yamaha SX7</Value>
      </DeliveryInfo>

      <DeliveryStatus>
        <TitleRow>
          <Icon name="calendar" size={24} color="#7D40E7" />
          <Title>Informações da entrega</Title>
        </TitleRow>
        <Label>Status</Label>
        <Value>Pendente</Value>

        <ContentRow>
          <Col>
            <Label>Data de retirada</Label>
            <Value>14/01/2020</Value>
          </Col>
          <Col>
            <Label>Data de entrega</Label>
            <Value>--/--/--</Value>
          </Col>
        </ContentRow>
      </DeliveryStatus>

      <Actions>
        <ActionBlock onPress={() => navigation.navigate('NewProblem')}>
          <Icon name="close-circle-outline" size={28} color="#E74040" />
          <ActionText>Informar {'\n'} Problema</ActionText>
        </ActionBlock>
        <ActionBlock onPress={() => navigation.navigate('Problems')}>
          <Icon name="information-outline" size={28} color="#E7BA40" />
          <ActionText>Visualizar {'\n'} Problemas</ActionText>
        </ActionBlock>
        <ActionBlock>
          <Icon name="check-circle-outline" size={28} color="#7D40E7" />
          <ActionText>Confirmar {'\n'} Entrega</ActionText>
        </ActionBlock>
      </Actions>
    </Container>
  );
};

export default OrderDetails;
