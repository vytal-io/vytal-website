import { Box, Link } from 'theme-ui'

interface VpnBlockProps {
  url: string
  linkText: string
  children: React.ReactNode
}

const VpnBlock = ({ url, linkText, children }: VpnBlockProps) => {
  return (
    <Link
      href={url}
      sx={{
        border: '2px solid',
        borderRadius: '4px',
        borderColor: 'border',
        p: '16px',
        mb: '16px',
        display: 'block',
        textDecoration: 'none',
        background: 'backgroundSecondary',
        color: 'textPrimary',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          borderColor: 'primary',
        },
      }}
      target="_blank"
    >
      <Box sx={{ mb: '12px' }}>{children}</Box>
      <Box
        sx={{
          fontSize: '20px',
          color: 'primaryDark',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {linkText}
      </Box>
    </Link>
  )
}

export default VpnBlock
