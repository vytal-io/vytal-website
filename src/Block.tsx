import { Box } from 'theme-ui'

interface BlockProps {
  children: React.ReactNode
}

const Block = ({ children }: BlockProps) => {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        width: '100%',
        lineHeight: '24px',
        mb: '24px',
      }}
    >
      {children}
    </Box>
  )
}

export default Block
