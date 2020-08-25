import React from 'react';

import Header from '../Header';
import Button from '../../../components/Button';

import {
  Container,
  ProblemBlock,
  Description,
  TextArea,
  ButtonContainer,
} from './styles';

const NewProblem = () => {
  return (
    <Container>
      <Header />
      <ProblemBlock>
        <Description>Inclua aqui o problema que ocorreu na entrega</Description>
        <TextArea
          underlineColorAndroid="transparent"
          numberOfLines={10}
          multiline
        />
      </ProblemBlock>
      <ButtonContainer>
        <Button text="Enviar" backgroundColor="#7D40E7" />
      </ButtonContainer>
    </Container>
  );
};

export default NewProblem;
