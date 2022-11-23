import { Box, Heading } from 'theme-ui'
import Block from './Block'
import ScanItem from './ScanItem'

interface ScanBlockProps {
  heading: string
  subHeading: string
  data: any
}

const ScanBlock = ({ heading, subHeading, data }: ScanBlockProps) => {
  return (
    <Block>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border',
          p: '16px 20px',
          borderRadius: '4px 4px 0 0',
          background: 'offWhite',
        }}
      >
        <Heading>{heading}</Heading>
        <Box sx={{ color: 'textSecondary' }}>{subHeading}</Box>
      </Box>
      <ScanItem
        title="Top Window"
        tampered={data.topWindow.tampered}
        value={data.topWindow.value}
      />
      {/* <ScanItem title="Frame" data={data} /> */}
      <ScanItem
        title="Web worker"
        tampered={data.webWorker.tampered}
        value={data.webWorker.value}
        noBorder
      />
      {/* <ScanItem title="Service worker" data={data.topWindow.value} noBorder /> */}
    </Block>
  )
}

export default ScanBlock
