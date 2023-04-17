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
        p: ['12px', '12px 20px', '12px 20px'],
        borderBottom: noBorder ? 'none' : '2px solid',
        borderColor: 'border',
        justifyContent: 'space-between',
        fontSize: ['13px', '15px', '15px'],
        backgroundColor: tampered ? 'red' : 'background',
      }}
    >
      <Box sx={{ whiteSpace: 'nowrap', minWidth: '135px', fontWeight: '500' }}>
        {title}
      </Box>
      <Box
        sx={{ color: 'textSecondary', lineBreak: 'anywhere', textAlign: 'end' }}
      >
        {value || 'null'}
      </Box>
    </Flex>
  )
}

export default ScanItem
