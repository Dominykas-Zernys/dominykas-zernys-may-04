import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, color, type }) => {
  return (
    <S.Button
      color={color}
      onClick={() => {
        console.log(`${type} button was pressed`);
      }}
    >
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default Button;
