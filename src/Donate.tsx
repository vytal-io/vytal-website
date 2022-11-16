import { Box, Flex, Link } from 'theme-ui'
import Block from './Block'

const Donate = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          width: '1000px',
          mt: '24px',
          flexDirection: 'column',
        }}
      >
        <Block style={{ p: '20px', background: '#fefefe' }}>
          Vytal is a browser extension that can spoof your timezone, locale,
          geolocation and user agent. This data can be used to determine your
          location and track you online. You can use this scan to test if you're
          timezone, locale, geolocation and user agent is exposed. The Vytal
          extension spoofs all of these values.
          <br /> Download for{' '}
          <Link
            variant="text"
            href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=scan"
            target="_blank"
          >
            Chrome
          </Link>
          ,{' '}
          <Link
            variant="text"
            href="https://microsoftedge.microsoft.com/addons/detail/vytal-spoof-timezone-l/nkaemodamjfefjgbefolnpnlccpdfpap"
            target="_blank"
          >
            Edge
          </Link>{' '}
          or{' '}
          <Link
            variant="text"
            href="https://addons.opera.com/en/extensions/details/vytal-spoof-timezone-location-user-agent"
            target="_blank"
          >
            Opera
          </Link>
          .
        </Block>
      </Flex>
    </Flex>
  )
}

export default Donate
