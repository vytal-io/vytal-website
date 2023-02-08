import type { Theme } from 'theme-ui'

export const theme: Theme = {
  breakpoints: ['600px', '1050px'],
  colors: {
    textPrimary: '#212529',
    textSecondary: '#696c6f',
    background: '#fff',
    backgroundSecondary: '#fbfbfb',
    primary: '#a55eea',
    primaryDark: '#9454d2',
    border: '#d8dee4',
    red: '#fae6e8',
    icon: '#83878a',
  },
  styles: {
    root: {
      backgroundColor: 'background',
      fontSize: ['13px', '14px', '14px'],
      lineHeight: '20px',
      margin: '0',
      color: 'textPrimary',
      li: {
        mb: '8px',
      },
    },
    h1: {
      fontSize: ['20px', '24px', '24px'],
      fontWeight: '500',
      color: 'textPrimary',
      fontFamily:
        "'Arial', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
    },
    h2: {
      fontSize: ['16px', '20px', '20px'],
      fontWeight: '500',
      color: 'textPrimary',
      fontFamily:
        "'Arial', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
    },
  },
  buttons: {
    block: {
      cursor: 'pointer',
      color: 'textPrimary',
      p: ['12px', '20px', '20px'],
      backgroundColor: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: '4px',
      width: '100%',
      lineHeight: '24px',
      textAlign: 'left',
      WebkitUserSelect: 'text',
      MozUserSelect: 'text',
      MsUserSelect: 'text',
      userSelect: 'text',
      ':hover': {
        borderColor: 'primary',
      },
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
  forms: {
    input: {
      color: 'textSecondary',
      borderColor: 'border',
      backgroundColor: 'background',
    },
  },
  images: {
    vpnLogo: {
      height: '45px',
      width: 'auto',
      mb: '8px',
    },
  },
}
