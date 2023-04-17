import { Flex, Link } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        gap: '26px',
        alignItems: 'center',
        flexShrink: '0',
        my: '24px',
      }}
    >
      <Link variant="footer" href="mailto:contact@vytal.io">
        Contact
      </Link>
      <Link variant="footer" href="/donate">
        Donate
      </Link>
      <Link variant="footer" href="https://twitter.com/vytalio" target="_blank">
        Twitter
      </Link>
    </Flex>
  )
}

export default Footer
