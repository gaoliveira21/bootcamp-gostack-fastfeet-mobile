import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border: 1px solid #f8f9fd;
  border-radius: 8px;
  margin-top: 20px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 14px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Footer = styled.View`
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

export const InfoBlock = styled.View`
  padding: 5px;
`;

export const InfoText = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 12px;
`;

export const Info = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: 14px;
`;

export const Details = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 14px;
`;

export const Main = styled.View`
  margin: 20px 0;
  width: 100%;
  justify-content: center;
`;

export const LineBlock = styled.View`
  padding: 0 28px;
  margin-left: 4px;
  width: 90%;
  align-self: center;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #7d40e7;
`;

export const LabelsContent = styled.View`
  margin-top: -5px;
  padding: 0 14px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const Point = styled.View`
  align-items: center;
`;

export const Circle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #7d40e7;

  ${(props) =>
    props.value <= props.statusLevel &&
    css`
      background: #7d40e7;
    `}
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #999999;
`;
