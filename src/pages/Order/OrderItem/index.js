import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  TitleText,
  Footer,
  InfoBlock,
  InfoText,
  Info,
  Details,
  Main,
  LineBlock,
  Line,
  LabelsContent,
  Point,
  Circle,
  Label,
} from './styles';

const OrderItem = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>
          <Icon name="truck" size={24} color="#7D40E7" />
          <TitleText>Encomenda 01</TitleText>
        </Title>
      </Header>
      <Main>
        <LineBlock>
          <Line />
        </LineBlock>
        <LabelsContent>
          <Point>
            <Circle value={0} statusLevel={0} />
            <Label>Aguardando {'\n'}retirada</Label>
          </Point>
          <Point>
            <Circle value={1} statusLevel={0} />
            <Label>Retirada</Label>
          </Point>
          <Point>
            <Circle value={2} statusLevel={0} />
            <Label>Entregue</Label>
          </Point>
        </LabelsContent>
      </Main>
      <Footer>
        <InfoBlock>
          <InfoText>Data</InfoText>
          <Info>14/02/2020</Info>
        </InfoBlock>
        <InfoBlock>
          <InfoText>Cidade</InfoText>
          <Info>Barra bonita</Info>
        </InfoBlock>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Details>Ver detalhes</Details>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default OrderItem;
