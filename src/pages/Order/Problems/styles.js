import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin: -50px 20px 15px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const Problem = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f8f9fd;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const Data = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
