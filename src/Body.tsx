import { Box, Flex, Heading, Link } from 'theme-ui'
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
        <Block>
          <Box sx={{ p: '20px', background: '#fefefe', borderRadius: '4px' }}>
            Vytal is a browser extension that utilizes the chrome.debugger API
            to mock device data that could otherwise reveal information about
            you. This website scans your browser for such data. A red x
            signifies that the scanner has detected tampered data. A green check
            means that no tampering has been detected.
          </Box>
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
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Body
