import { useState } from 'react'
import { Flex, Link, Image, Button } from 'theme-ui'
import logo from 'assets/logo.svg'
import HeaderMenu from './HeaderMenu'
import { Menu, X } from 'react-feather'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: ['55px', '60px', '60px'],
          background: 'primary',
          pl: ['none', 'none', 'calc(100vw - 100%)'],
        }}
      >
        <Flex
          sx={{
            width: '1000px',
            justifyContent: 'space-between',
            mx: ['12px', '24px', '24px'],
            alignItems: 'center',
          }}
        >
          <Flex sx={{ gap: '26px', alignItems: 'center' }}>
            <Link
              href="/"
              sx={{
                height: ['30px', '36px', '36px'],
                width: ['133px', '160px', '160px'],
              }}
            >
              <Image
                src={logo}
                alt="Vytal logo"
                sx={{
                  height: ['30px', '36px', '36px'],
                  width: 'auto',
                }}
              />
            </Link>
            <HeaderMenu sx={{ display: ['none', 'flex', 'flex'] }} />
          </Flex>
          <Link
            variant="button"
            href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=header"
            target="_blank"
            sx={{
              display: ['none', 'block', 'block'],
              backgroundColor: 'white',
              color: 'textPurple',
              fontWeight: '500',
              ':hover': {
                background: 'white',
                opacity: '0.85',
              },
            }}
          >
            Download Extension
          </Link>
          <Button
            sx={{
              all: 'unset',
              cursor: 'pointer',
              display: ['block', 'none', 'none'],
              width: '25px',
              height: '25px',
              color: 'background',
              transition: 'all 0.15s ease-in-out',
              ':hover': {
                opacity: '0.85',
              },
            }}
            aria-label="Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X size={25} /> : <Menu size={25} />}
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          display: [showMenu ? 'block' : 'none', 'none', 'none'],
          position: 'absolute',
          top: '55px',
          right: '0',
          background: 'backgroundSecondary',
          border: '2px solid',
          borderColor: 'border',
          borderTop: 'none',
          borderRadius: '0 0 4px 4px',
          fontSize: '17px',
          p: '18px',
        }}
        onClick={() => setShowMenu(false)}
      >
        <HeaderMenu />
        <Link
          variant="button"
          href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=header"
          target="_blank"
          sx={{ mt: '24px' }}
        >
          Download Extension
        </Link>
      </Flex>
    </>
  )
}

export default Header
