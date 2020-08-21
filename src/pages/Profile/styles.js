import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 45px 36px 20px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: #ccc;
  align-self: center;
`;

export const ProfileInfo = styled.View`
  margin: 30px 0;
`;

export const InfoBlock = styled.View`
  margin-bottom: 14px;
`;

export const InfoLabel = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;
