import styled, { css } from 'styled-components/native';

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

export const PageTitle = styled.View`
  margin-top: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const Filters = styled.View`
  flex-direction: row;
`;

export const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #999999;

  ${(props) =>
    props.active &&
    css`
      color: #7d40e7;
      border-bottom-width: 2px;
      border-bottom-color: #7d40e7;
    `}
`;
