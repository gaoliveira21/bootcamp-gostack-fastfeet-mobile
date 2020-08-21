import React from 'react';
import { Image } from 'react-native';

import Button from '../../components/Button';

import { Container, Form, Input } from './styles';

import logo from '../../assets/logo.png';

const SignIn = () => {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input placeholder="Informe seu ID de cadastro" />
        <Button backgroundColor="#82bf18">Entrar no sistema</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
