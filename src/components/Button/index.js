import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const Button = ({ text, backgroundColor, onPress }) => {
  return (
    <Container background={backgroundColor} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
