import { useState, useEffect } from 'react'
import { Box, Flex, Heading, Link } from 'theme-ui'
import { fullScan } from './scan'
import Block from './Block'
import PageBody from './PageBody'
import ScanBlock from './ScanBlock'
import ScanItem from './ScanItem'
import GeolocationBlock from './GeolocationBlock'

const ScanPage = () => {
  const [scanData, setScanData] = useState<any>(undefined)

  useEffect(() => {
    console.log('Scanning...')
    fullScan().then((data: any) => setScanData(data))
  }, [])

  return (
    <PageBody>
      <Block sx={{ p: '20px', background: 'offWhite' }}>
        <Box sx={{ fontSize: '24px', mb: ['6px', '10px', '10px'] }}>Scan</Box>
        Vytal is a browser extension that can spoof your timezone, locale,
        geolocation and user agent. This data can be used to determine your
        location and track you online. Use this scan to test if any of this data
        is exposed. Red highlighting means that tampering has been detected and
        that the data is not authentic. The Vytal extension spoofs all of these
        values undetected. Download for{' '}
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
      {scanData ? (
        <>
          <Box sx={{ display: ['none', 'none', 'flex'], gap: '24px' }}>
            <Box sx={{ width: '100%' }}>
              <ScanBlock
                heading="Time Zone"
                subHeading="intl.DateTimeFormat().resolvedOptions().timeZone"
                data={scanData.clientData.timezone}
              />
              <ScanBlock
                heading="Time Zone Offset"
                subHeading="new Date().getTimezoneOffset()"
                data={scanData.clientData.timezoneOffset}
              />
              <ScanBlock
                heading="Date Locale"
                subHeading="new Date().toLocaleString()"
                data={scanData.clientData.dateLocale}
              />
              <ScanBlock
                heading="User Agent"
                subHeading="navigator.userAgent"
                data={scanData.clientData.userAgent}
              />
              <ScanBlock
                heading="Platform"
                subHeading="navigator.platform"
                data={scanData.clientData.platform}
                noMb
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <GeolocationBlock geolocationData={scanData.htmlGeolocation} />
              <ScanBlock
                heading="Locale"
                subHeading="Intl.DateTimeFormat().resolvedOptions().locale"
                data={scanData.clientData.locale}
              />
              <ScanBlock
                heading="Date"
                subHeading="new Date().toString()"
                data={scanData.clientData.dateString}
              />
              <ScanBlock
                heading="App Version"
                subHeading="navigator.appVersion"
                data={scanData.clientData.appVersion}
                noMb
              />
            </Box>
          </Box>
          <Box sx={{ display: ['block', 'block', 'none'], width: '100%' }}>
            <GeolocationBlock geolocationData={scanData.htmlGeolocation} />
            <ScanBlock
              heading="Time Zone"
              subHeading="intl.DateTimeFormat().resolvedOptions().timeZone"
              data={scanData.clientData.timezone}
            />
            <ScanBlock
              heading="Locale"
              subHeading="Intl.DateTimeFormat().resolvedOptions().locale"
              data={scanData.clientData.locale}
            />
            <ScanBlock
              heading="Time Zone Offset"
              subHeading="new Date().getTimezoneOffset()"
              data={scanData.clientData.timezoneOffset}
            />
            <ScanBlock
              heading="Date Locale"
              subHeading="new Date().toLocaleString()"
              data={scanData.clientData.dateLocale}
            />
            <ScanBlock
              heading="Date"
              subHeading="new Date().toString()"
              data={scanData.clientData.dateString}
            />
            <ScanBlock
              heading="User Agent"
              subHeading="navigator.userAgent"
              data={scanData.clientData.userAgent}
            />
            <ScanBlock
              heading="App Version"
              subHeading="navigator.appVersion"
              data={scanData.clientData.appVersion}
            />
            <ScanBlock
              heading="Platform"
              subHeading="navigator.platform"
              data={scanData.clientData.platform}
              noMb
            />
          </Box>
        </>
      ) : (
        <Block
          sx={{
            p: '20px',
            background: 'offWhite',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Loading...
        </Block>
      )}
    </PageBody>
  )
}

export default ScanPage
