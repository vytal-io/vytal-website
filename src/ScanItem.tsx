import { Box, Flex } from 'theme-ui'

interface ScanItemProps {
  title: string
  tampered: boolean
  value: string
  noBorder?: boolean
}

const ScanItem = ({ title, value, noBorder }: ScanItemProps) => {
  return (
    <Flex
      sx={{
        p: ['12px', '12px 20px', '12px 20px'],
        borderBottom: noBorder ? 'none' : '1px solid',
        borderColor: 'border',
        justifyContent: 'space-between',
        fontSize: ['13px', '15px', '15px'],
      }}
    >
      <Box sx={{ whiteSpace: 'nowrap', minWidth: '135px' }}>{title}</Box>
      <Box
        sx={{ color: 'textSecondary', lineBreak: 'anywhere', textAlign: 'end' }}
      >
        {value || 'null'}
      </Box>
    </Flex>
  )
}

export default ScanItem
