import { Flex, Link } from 'theme-ui'
import logo from './logo.svg'

const Header = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        borderBottom: '1px solid',
        borderColor: 'border',
        background: 'offWhite',
        paddingLeft: 'calc(100vw - 100%)',
      }}
    >
      <Flex
        sx={{
          width: '1000px',
          justifyContent: 'space-between',
          mx: '24px',
        }}
      >
        <Flex sx={{ gap: '26px', alignItems: 'center' }}>
          <Link href="/" sx={{ height: '36px' }}>
            <img src={logo} alt="Vytal logo" />
          </Link>
          <Link variant="nav" href="/scan">
            Scan
          </Link>
          <Link variant="nav" href="/faq">
            FAQ
          </Link>
          <Link variant="nav" href="/donate">
            Donate
          </Link>
        </Flex>
        <Link
          variant="button"
          href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=header"
          target="_blank"
        >
          Download Extension
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
