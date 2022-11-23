import { Box, Flex } from 'theme-ui'

interface ScanItemProps {
  title: string
  tampered: boolean
  value: string
  noBorder?: boolean
}

const ScanItem = ({ title, tampered, value, noBorder }: ScanItemProps) => {
  return (
    <Flex
      sx={{
        p: '12px 20px',
        borderBottom: noBorder ? 'none' : '1px solid',
        borderColor: 'border',
        justifyContent: 'space-between',
        fontSize: '15px',
        backgroundColor: tampered ? 'red' : 'white',
      }}
    >
      <Box sx={{ whiteSpace: 'nowrap', minWidth: '135px' }}>{title}</Box>
      <Box sx={{ color: 'textSecondary', lineBreak: 'anywhere' }}>
        {value || 'null'}
      </Box>
    </Flex>
  )
}

export default ScanItem
