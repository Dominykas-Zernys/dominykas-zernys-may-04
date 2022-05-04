import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const Hero = (props) => {
  return (
    <S.Hero color={props.color}>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </S.Hero>
  );
};

Hero.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
