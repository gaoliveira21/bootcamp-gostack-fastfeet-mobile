import React from 'react';

import Header from '../Header';

import {
  Container,
  Title,
  Problem,
  Description,
  Data,
  Content,
} from './styles';

const Problems = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Encomenda 01</Title>
        <Problem>
          <Description>Destinatário ausente</Description>
          <Data>14/01/2020</Data>
        </Problem>
        <Problem>
          <Description>Destinatário ausente</Description>
          <Data>15/01/2020</Data>
        </Problem>
      </Content>
    </Container>
  );
};

export default Problems;
