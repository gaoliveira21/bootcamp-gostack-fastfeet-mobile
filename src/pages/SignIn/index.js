import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '../../assets/logo.png';

const SignIn = () => {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input placeholder="Informe seu ID de cadastro" />
        <SubmitButton>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default SignIn;
