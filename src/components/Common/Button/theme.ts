import { scales, variants } from './types';

export const scaleVariants = {
  [scales.MD]: {
    height: '3rem',
    padding: '0 40px',
  },
  [scales.SM]: {
    height: '2.5rem',
    padding: '0 30px',
  },
  [scales.XS]: {
    height: '2rem',
    padding: '0 20px',
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: '#7FA47F',
    color: '#fff',
  },
  [variants.PRIMARY_BASIC]: {
    backgroundColor: 'white',
    border: '2px solid',
    borderColor: '#7FA47F',
    color: 'primary',
    ':disabled': {
      backgroundColor: 'transparent',
      color: '#66696B',
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: '#447878',
    color: '#fff',
    ':disabled': {
      backgroundColor: '#E9EAEB',
      borderColor: '#E9EAEB',
    },
  },
  [variants.SECONDARY_BASIC]: {
    backgroundColor: '#ff5700',
    border: 'none',
    color: '#fff',
    ':disabled': {
      backgroundColor: 'transparent',
      color: '#E9EAEB',
      borderColor: '#E9EAEB',
    },
  },
  [variants.TEXT]: {
    backgroundColor: 'transparent',
    color: 'primary',
  },
};
