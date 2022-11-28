import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    textPrimary: '#212529',
    textSecondary: '#75797c',
    background: '#fff',
    secondaryBackground: '#fcfcfc',
    primary: '#a55eea',
    primaryDark: '#9454d2',
    offWhite: '#fefefe',
    border: '#d8dee4',
    red: '#fae6e8',
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
      ':hover': {
        color: 'primaryDark',
      },
    },
    text: {
      textDecoration: 'none',
      color: 'primaryDark',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    button: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      textDecoration: 'none',
      color: '#fff',
      height: '36px',
      background: 'primary',
      borderRadius: '4px',
      padding: '8px 16px',
      ':hover': {
        background: 'primaryDark',
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
