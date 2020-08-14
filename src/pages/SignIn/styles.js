import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7d40e7;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 15px;
  width: 100%;
  padding: 25px;
`;

export const Input = styled.TextInput`
  align-self: stretch;
  background: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-self: stretch;
  background: #82bf18;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
