import { Box, ThemeUIStyleObject } from 'theme-ui'

interface BlockProps {
  children: React.ReactNode
  style?: ThemeUIStyleObject
}

const Block = ({ children, style }: BlockProps) => {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        width: '100%',
        lineHeight: '24px',
        mb: '24px',
        ...style,
      }}
    >
      {children}
    </Box>
  )
}

export default Block
