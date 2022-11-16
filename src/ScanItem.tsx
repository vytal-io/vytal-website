import { Box, Flex } from 'theme-ui'

interface ScanItemProps {
  title: string
  data: string
  noBorder?: boolean
}

const ScanItem = ({ title, data, noBorder }: ScanItemProps) => {
  return (
    <Flex
      sx={{
        p: '12px 20px',
        borderBottom: noBorder ? 'none' : '1px solid',
        borderColor: 'border',
        justifyContent: 'space-between',
        fontSize: '15px',
      }}
    >
      <Box sx={{ whiteSpace: 'nowrap', minWidth: '120px' }}>{title}</Box>
      <Box sx={{ color: 'textSecondary' }}>{data}</Box>
    </Flex>
  )
}

export default ScanItem
