import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 155px;
  background-color: #7d40e7;
`;

export const DeliveryInfo = styled.View`
  border: 1px solid #f8f9fd;
  background: #f8f9fd;
  margin: -50px 20px 15px;
  padding: 13px;
  border-radius: 4px;
`;

export const DeliveryStatus = styled.View`
  border: 1px solid #f8f9fd;
  background: #f8f9fd;
  margin: 0 20px 15px;
  padding: 13px;
  border-radius: 4px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 5px;
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 14px;
  margin: 4px 0;
  text-transform: uppercase;
`;

export const Value = styled.Text`
  color: #555;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Actions = styled.View`
  margin: 0 20px;
  background: #f8f9fd;
  border: 1px solid #f8f9fd;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ActionBlock = styled(BorderlessButton)`
  align-items: center;
  padding: 20px;
`;

export const ActionText = styled.Text`
  color: #999999;
  text-align: center;
`;
