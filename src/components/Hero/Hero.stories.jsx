import React from 'react';
import Hero from './Hero';

export const Success = () => (
  <Hero title='Success Hero' subtitle='Success subtitle' color='success' />
);

export const Danger = () => (
  <Hero title='Danger Hero' subtitle='Danger subtitle' color='danger' />
);

export default {
  title: 'Hero',
  component: Hero,
};
