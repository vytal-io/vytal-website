import type { Theme } from 'theme-ui'

export const theme: Theme = {
  breakpoints: ['600px', '1050px'],
  colors: {
    textPrimary: '#212529',
    textSecondary: '#545658',
    textPurple: '#854BBD',
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
        "'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantrell', 'Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
    },
    h2: {
      fontSize: ['16px', '20px', '20px'],
      fontWeight: '500',
      color: 'textPrimary',
      fontFamily:
        "'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantrell', 'Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';",
    },
  },
  buttons: {
    block: {
      cursor: 'pointer',
      color: 'textPrimary',
      p: ['12px', '20px', '20px'],
      backgroundColor: 'backgroundSecondary',
      border: '2px solid',
      borderColor: 'border',
      borderRadius: '4px',
      width: '100%',
      lineHeight: '24px',
      textAlign: 'left',
      WebkitUserSelect: 'text',
      MozUserSelect: 'text',
      MsUserSelect: 'text',
      userSelect: 'text',
      transition: 'all 0.15s ease-in-out',
      ':hover': {
        borderColor: 'primary',
      },
    },
  },
  links: {
    header: {
      textDecoration: 'none',
      color: ['textPrimary', 'background', 'background'],
      fontWeight: '500',
      transition: 'all 0.15s ease-in-out',
      ':hover': {
        opacity: '0.85',
      },
    },
    footer: {
      textDecoration: 'none',
      color: 'textSecondary',
      transition: 'all 0.15s ease-in-out',
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
      fontWeight: '500',
      transition: 'all 0.15s ease-in-out',
      ':hover': {
        background: 'primaryDark',
      },
    },
  },
  forms: {
    input: {
      color: 'textSecondary',
      backgroundColor: 'background',
      border: '2px solid',
      borderColor: 'border',
      outline: 'none',
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
