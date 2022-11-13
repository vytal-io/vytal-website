import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    textPrimary: '#495057',
    textSecondary: '#92969a',
    background: '#fff',
    primary: '#a55eea',
    primaryDark: '#9454d2',
    offWhite: '#fefefe',
    border: '#dee2e6',
  },
  styles: {
    root: {
      backgroundColor: 'background',
      //   color: 'text',
      fontSize: '14px',
      lineHeight: '20px',

      margin: '0',
    },
  },
  fonts: {
    body: 'arial',
  },
  links: {
    nav: {
      textDecoration: 'none',
      color: 'textSecondary',
      fontWeight: '400',
      p: 0,
      ':hover': {
        color: 'primaryDark',
      },
    },
  },
}
