import { Box, Flex, Link } from 'theme-ui'

const HeaderMenu = ({ ...restProps }) => {
  return (
    <Box {...restProps}>
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <Link variant="nav" href="/#/scan">
          Scan
        </Link>
        <Link variant="nav" href="/#/faq">
          FAQ
        </Link>
        <Link variant="nav" href="/#/donate">
          Donate
        </Link>
      </Flex>
    </Box>
  )
}

export default HeaderMenu
