import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 45px 20px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background: #ccc;
`;

export const UserText = styled.Text`
  margin-left: 10px;
  font-size: 12px;
  color: #555;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
