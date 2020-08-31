import React, { useContext, useState } from 'react';
import { Image } from 'react-native';

import AuthContext from '../../contexts/auth';

import Button from '../../components/Button';

import { Container, Form, Input } from './styles';

import logo from '../../assets/logo.png';

const SignIn = () => {
  const [accessId, setAccessId] = useState('');
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          placeholder="Informe seu ID de cadastro"
          value={accessId}
          onChangeText={(text) => setAccessId(text)}
        />
        <Button
          text="Entrar no sistema"
          backgroundColor="#82bf18"
          onPress={() => signIn(accessId)}
        />
      </Form>
    </Container>
  );
};

export default SignIn;
