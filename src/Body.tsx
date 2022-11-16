import { Box, Flex, Link } from 'theme-ui'
import Block from './Block'
import ScanBlock from './ScanBlock'

const Body = () => {
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
        <Flex sx={{ gap: '24px' }}>
          <Box sx={{ width: '100%' }}>
            <ScanBlock
              heading="Time Zone"
              subHeading="intl.DateTimeFormat().resolvedOptions().timeZone"
              data="America/New_York"
            />
            <ScanBlock
              heading="Time Zone Offset"
              subHeading="new Date().getTimezoneOffset()"
              data="300"
            />
            <ScanBlock
              heading="Date Locale"
              subHeading="new Date().toLocaleString()"
              data="11/13/2022, 4:55:31 AM"
            />
            <ScanBlock
              heading="User Agent"
              subHeading="navigator.userAgent"
              data="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
            />
            <ScanBlock
              heading="Platform"
              subHeading="navigator.platform"
              data="Linux x86_64"
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <ScanBlock
              heading="Locale"
              subHeading="Intl.DateTimeFormat().resolvedOptions().locale"
              data="en-US"
            />
            <ScanBlock
              heading="Date"
              subHeading="new Date().toString()"
              data="Sun Nov 13 2022 04:55:31 GMT-0500 (Eastern Standard Time)"
            />
            <ScanBlock
              heading="Time"
              subHeading="new Date().getTime()"
              data="1668375771795"
            />

            <ScanBlock
              heading="App Version"
              subHeading="navigator.appVersion"
              data="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Body
