import { Box, Flex } from 'theme-ui'

interface ScanItemProps {
  title: string
  value: string
  noBorder?: boolean
}

const HomeItem = ({ title, value, noBorder }: ScanItemProps) => {
  return (
    <Flex
      sx={{
        p: ['12px', '20px', '20px'],
        borderBottom: noBorder ? 'none' : '1px solid',
        borderColor: 'border',
        justifyContent: 'space-between',
        fontSize: ['16px', '18px', '18px'],
        borderRadius: noBorder ? '4px' : '0',
      }}
    >
      <Box sx={{ whiteSpace: 'nowrap', minWidth: '135px' }}>{title}</Box>
      <Box sx={{ color: 'textSecondary', lineBreak: 'anywhere' }}>
        {value || 'null'}
      </Box>
    </Flex>
  )
}

export default HomeItem
