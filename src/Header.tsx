import { Flex, Link } from 'theme-ui'
import logo from './logo.svg'

function App() {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        borderBottom: '1px solid',
        borderColor: 'border',
        background: 'offWhite',
      }}
    >
      <Flex sx={{ width: '1100px', justifyContent: 'space-between' }}>
        <Flex sx={{ gap: '26px', alignItems: 'center' }}>
          <Link href="/">
            <img src={logo} alt="Vytal logo" />
          </Link>
          <Link variant="nav" href="/scan">
            Scan
          </Link>
          <Link variant="nav" href="/faq">
            FAQ
          </Link>
          <Link
            variant="nav"
            href="https://github.com/vytal-io/vytal-extension"
            target="_blank"
          >
            Source Code
          </Link>
          <Link variant="nav" href="#/donate">
            Donate
          </Link>
        </Flex>
        <Link
          sx={{
            textDecoration: 'none',
            color: '#fff',
            height: '36px',
            background: 'primary',
            borderRadius: '4px',
            padding: '8px 16px',
            ':hover': {
              background: 'primaryDark',
            },
          }}
          href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=header"
          target="_blank"
        >
          Download Extension
        </Link>
      </Flex>
    </Flex>
  )
}

export default App
