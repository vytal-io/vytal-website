import { Box, Flex, Link } from 'theme-ui'

const HeaderMenu = ({ ...restProps }) => {
  return (
    <Box {...restProps}>
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          gap: '24px',
          alignItems: 'center',
          color: 'background',
        }}
      >
        <Link variant="header" href="/scan">
          Scan
        </Link>
        <Link variant="header" href="/faq">
          FAQ
        </Link>
        <Link
          variant="header"
          href="https://github.com/vytal-io"
          target="_blank"
        >
          GitHub
        </Link>
      </Flex>
    </Box>
  )
}

export default HeaderMenu
