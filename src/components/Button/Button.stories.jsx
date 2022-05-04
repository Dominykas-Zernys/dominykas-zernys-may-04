import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button type='submit' color='primary'>
    Texts
  </Button>
);
export const Success = () => (
  <Button type='reset' color='success'>
    Texts
  </Button>
);
export const Danger = () => (
  <Button type='button' color='danger'>
    Texts
  </Button>
);

export default {
  title: 'Button',
  component: Button,
};
