import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    textPrimary: '#212529',
    textSecondary: '#83878a',
    background: '#fff',
    primary: '#a55eea',
    primaryDark: '#9454d2',
    offWhite: '#fefefe',
    border: '#dee2e6',
  },
  styles: {
    root: {
      backgroundColor: 'background',
      fontSize: '14px',
      lineHeight: '20px',
      margin: '0',
      color: 'textPrimary',
    },
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
  text: {
    heading: {
      fontWeight: '500',
      fontSize: '20px',
      color: 'textPrimary',
      fontFamily:
        "'Arial', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
      mb: '4px',
    },
  },
}
