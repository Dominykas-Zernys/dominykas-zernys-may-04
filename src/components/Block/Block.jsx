import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Block.style';

const Block = (props) => {
  return <S.Block color={props.color}>{props.children}</S.Block>;
};

Block.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
};

export default Block;
