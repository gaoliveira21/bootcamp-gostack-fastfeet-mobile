import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../../components/Button';

import Header from '../Header';

import {
  Container,
  Content,
  Photo,
  CameraButton,
  Description,
  NoPhoto,
} from './styles';

function Confirm() {
  const [photo, setPhoto] = useState(null);

  return (
    <Container>
      <Header />
      <Content>
        <Photo image={photo}>
          {!photo && (
            <NoPhoto>
              <Icon name="camera-off" color="#ccc" size={95} />
              <Description>Nenhuma foto selecionada</Description>
            </NoPhoto>
          )}

          <CameraButton>
            <Icon name="camera" color="#fff" size={28} />
          </CameraButton>
        </Photo>
        <Button text="Enviar" backgroundColor="#7D40E7" />
      </Content>
    </Container>
  );
}

export default Confirm;
