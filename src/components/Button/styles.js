import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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
