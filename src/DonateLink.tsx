import { Box, Flex, Heading, Link } from 'theme-ui'
import { ExternalLink } from 'react-feather'

interface DonateLinkProps {
  heading: string
  subHeading: string
}

const DonateLink = ({ heading, subHeading }: DonateLinkProps) => {
  return (
    <Link
      sx={{
        display: 'block',
        textDecoration: 'none',
        p: '20px',
        background: 'offWhite',
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        lineHeight: '24px',
        mb: '24px',
        ':hover': {
          borderColor: 'primary',
        },
      }}
      href={subHeading}
      target="_blank"
    >
      <Heading sx={{ mb: '8px' }}>{heading}</Heading>
      <Flex sx={{ alignItems: 'center', gap: '6px' }}>
        <ExternalLink color="#83878a" size={14} />
        <Box
          sx={{
            color: 'textSecondary',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {subHeading}
        </Box>
      </Flex>
    </Link>
  )
}

export default DonateLink
