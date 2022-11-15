import { Box, Flex, Heading, Link } from 'theme-ui'
import Block from './Block'
import ScanItem from './ScanItem'

interface ScanBlockProps {
  heading: string
  subHeading: string
  data: string
}

const ScanBlock = ({ heading, subHeading, data }: ScanBlockProps) => {
  return (
    <Block>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border',
          p: '16px 20px',
          borderRadius: '4px',
          background: '#fefefe',
        }}
      >
        <Heading>{heading}</Heading>
        <Box sx={{ color: 'textSecondary' }}>{subHeading}</Box>
      </Box>
      <ScanItem title="Top Window" data={data} />
      <ScanItem title="Frame" data={data} />
      <ScanItem title="Web worker" data={data} />
      <ScanItem title="Service worker" data={data} noBorder />
    </Block>
  )
}

export default ScanBlock
