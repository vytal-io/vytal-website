import { Box, type BoxProps } from 'theme-ui'

type BlockProps = React.PropsWithChildren<BoxProps>

const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        width: '100%',
        lineHeight: '24px',
        mb: ['12px', '24px', '24px'],
        ...(props.sx || {}),
      }}
    >
      {children}
    </Box>
  )
}

export default Block
