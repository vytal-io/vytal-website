import { Box, Flex, Heading, Input, Link } from 'theme-ui'
import { ExternalLink } from 'react-feather'

interface DonateLinkProps {
  title: string
  url: string
}

const DonateLink = ({ title, url }: DonateLinkProps) => {
  return (
    <Link
      sx={{
        width: '100%',
        display: 'block',
        textDecoration: 'none',
        p: ['12px', '20px', '20px'],
        background: 'backgroundSecondary',
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        lineHeight: '24px',
        ':hover': {
          borderColor: 'primary',
        },
      }}
      href={url}
      target="_blank"
    >
      <Heading variant="styles.h2" sx={{ mb: '8px' }}>
        {title}
      </Heading>
      <Flex sx={{ alignItems: 'center', gap: '8px' }}>
        <Box sx={{ color: 'icon' }}>
          <ExternalLink size={14} />
        </Box>
        <Input value={url} readOnly />
      </Flex>
    </Link>
  )
}

export default DonateLink
