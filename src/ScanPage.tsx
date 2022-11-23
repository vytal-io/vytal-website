import { useState, useEffect } from 'react'
import { Box, Flex, Heading, Link } from 'theme-ui'
import scan from './scan'
import Block from './Block'
import PageBody from './PageBody'
import ScanBlock from './ScanBlock'
import ScanItem from './ScanItem'

const ScanPage = () => {
  const [scanData, setScanData] = useState<any>(undefined)

  useEffect(() => {
    console.log('Scanning...')
    scan().then((data) => setScanData(data))
  }, [])

  return (
    <PageBody>
      <Block sx={{ p: '20px', background: 'offWhite' }}>
        Vytal is a browser extension that can spoof your timezone, locale,
        geolocation and user agent. This data can be used to determine your
        location and track you online. Use this scan to test if any of this data
        is exposed. Red highlighting means that tampering has been detected and
        that the data is not authentic.
        <br /> The Vytal extension spoofs all of these values undetected.
        Download for{' '}
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
        <Flex sx={{ gap: '24px' }}>
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
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Block>
              <Box
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'border',
                  p: '16px 20px',
                  borderRadius: '4px 4px 0 0',
                  background: 'offWhite',
                }}
              >
                <Heading>Geolocation</Heading>
                <Box sx={{ color: 'textSecondary' }}>
                  navigator.geolocation.getCurrentPosition()
                </Box>
              </Box>
              {scanData.htmlGeolocation.data ? (
                <>
                  <ScanItem
                    title="Reverse Geocode"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.reverseGeocode}
                  />
                  <ScanItem
                    title="Latitude"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.latitude}
                  />
                  <ScanItem
                    title="Longitude"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.longitude}
                  />
                  <ScanItem
                    title="Accuracy"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.accuracy}
                  />
                  <ScanItem
                    title="Altitude"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.altitude}
                  />
                  <ScanItem
                    title="Altitude Accuracy"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.altitudeAccuracy}
                  />
                  <ScanItem
                    title="Heading"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.heading}
                  />
                  <ScanItem
                    title="Speed"
                    tampered={scanData.htmlGeolocation.tampered}
                    value={scanData.htmlGeolocation.data.speed}
                    noBorder
                  />
                </>
              ) : (
                <Flex
                  sx={{
                    p: '12px 20px',
                    justifyContent: 'space-between',
                    fontSize: '15px',
                  }}
                >
                  {scanData.htmlGeolocation}
                </Flex>
              )}
            </Block>
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
            />
          </Box>
        </Flex>
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
