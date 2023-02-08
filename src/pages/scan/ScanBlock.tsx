import { Box, Heading } from 'theme-ui'
import Block from 'components/Block'
import ScanItem from './ScanItem'

interface ScanBlockProps {
  heading: string
  subHeading: string
  data: any
  noMb?: boolean
}

const ScanBlock = ({
  heading,
  subHeading,
  data,
  noMb = false,
}: ScanBlockProps) => {
  return (
    <Block sx={{ mb: noMb ? 0 : ['18px', '24px', '24px'] }}>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border',
          p: ['12px', '16px 20px', '16px 20px'],
          borderRadius: '4px 4px 0 0',
          background: 'backgroundSecondary',
        }}
      >
        <Heading variant="styles.h2">{heading}</Heading>
        <Box sx={{ color: 'textSecondary' }}>{subHeading}</Box>
      </Box>
      <ScanItem
        title="Top Window"
        tampered={data.topWindow.tampered}
        value={data.topWindow.value}
      />
      <ScanItem
        title="Frame"
        tampered={data.frame.tampered}
        value={data.frame.value}
      />
      <ScanItem
        title="Web worker"
        tampered={data.webWorker.tampered}
        value={data.webWorker.value}
        noBorder
      />
    </Block>
  )
}

export default ScanBlock
