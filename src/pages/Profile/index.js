import React from 'react';

import Button from '../../components/Button';

import {
  Container,
  Avatar,
  ProfileInfo,
  InfoBlock,
  InfoLabel,
  Info,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://api.adorable.io/avatars/285/gabriel.png',
        }}
      />
      <ProfileInfo>
        <InfoBlock>
          <InfoLabel>Nome completo</InfoLabel>
          <Info>Gabriel</Info>
        </InfoBlock>
        <InfoBlock>
          <InfoLabel>Email</InfoLabel>
          <Info>ga@mail.com</Info>
        </InfoBlock>
        <InfoBlock>
          <InfoLabel>Data de cadastro</InfoLabel>
          <Info>20/08/2020</Info>
        </InfoBlock>
      </ProfileInfo>
      <Button text="Sair do sistema" backgroundColor="#E74040" />
    </Container>
  );
};

export default Profile;
