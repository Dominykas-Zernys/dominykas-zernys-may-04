import React from 'react';
import Block from './Block';

export const Primary = () => (
  <Block color='primary'>This is a primary block</Block>
);

export const Success = () => (
  <Block color='success'>This is a success block</Block>
);

export const Danger = () => (
  <Block color='danger'>This is a danger block</Block>
);

export default {
  title: 'Block',
  component: Block,
};
