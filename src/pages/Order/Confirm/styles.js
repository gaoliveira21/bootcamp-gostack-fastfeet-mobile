import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

import whiteImg from '../../../assets/white.jpg';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin: -50px 20px 15px;
  align-items: center;
`;

export const Photo = styled.ImageBackground.attrs((props) => ({
  source: props.image || whiteImg,
  style: { width: '100%', height: '100%' },
}))`
  width: 100%;
  height: 500px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  margin-bottom: 30px;
`;

export const CameraButton = styled(BaseButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  background: rgba(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

export const Description = styled.Text`
  color: #ccc;
  font-size: 16px;
`;

export const NoPhoto = styled.View`
  position: absolute;
  top: 30%;
  align-items: center;
`;
