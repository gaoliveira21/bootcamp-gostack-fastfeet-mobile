import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const Button = ({ text, backgroundColor }) => {
  return (
    <Container background={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
