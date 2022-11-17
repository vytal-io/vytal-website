import { Box, Heading } from 'theme-ui'
import Block from './Block'

interface DonateBlockProps {
  heading: string
  subHeading: string
}

const DonateBlock = ({ heading, subHeading }: DonateBlockProps) => {
  return (
    <Block style={{ p: '20px', background: 'offWhite' }}>
      <Heading sx={{ mb: '8px' }}>{heading}</Heading>
      <Box sx={{ color: 'textSecondary' }}>{subHeading}</Box>
    </Block>
  )
}

export default DonateBlock
