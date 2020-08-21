import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-self: stretch;
  background: ${(props) => props.background};
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
