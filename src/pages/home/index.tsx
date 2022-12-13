import { useState, useEffect } from 'react'
import { Box, Flex, Heading, Link } from 'theme-ui'
import { homeScan } from 'scan'
import Block from 'components/Block'
import PageBody from 'components/PageBody'
import HomeItem from './HomeItem'
import ChromeIcon from 'assets/chrome.svg'
import EdgeIcon from 'assets/edge.svg'
import OperaIcon from 'assets/opera.svg'

const HomePage = () => {
  const [scanData, setScanData] = useState<any>(undefined)

  useEffect(() => {
    homeScan().then((data: any) => {
      setScanData(data)
    })
  }, [])

  return (
    <PageBody title="Vytal - Spoof Timezone, Geolocation, Locale and User Agent">
      <Box
        sx={{
          display: ['block', 'block', 'flex'],
          height: ['auto', 'auto', 'calc(90vh - 84px)'],
          minHeight: ['auto', 'auto', '450px'],
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: ['100%', '100%', '45%'],
            mb: ['30px', '30px', '0'],
            textAlign: ['center', 'center', 'left'],
          }}
        >
          <Heading
            as="h1"
            variant="styles.h1"
            sx={{
              fontSize: ['38px', '50px', '50px'],
              lineHeight: ['50px', '65px', '65px'],
            }}
          >
            Spoof Timezone, Geolocation, Locale and User Agent.
          </Heading>
          <Heading
            variant="styles.h2"
            sx={{
              fontSize: ['17px', '18px', '18px'],
              lineHeight: '30px',
              mt: ['18px', '20px', '20px'],
            }}
          >
            This data can be used to determine your location and track you
            online even with a VPN. Download the Vytal extension to spoof this
            data and protect yourself online.
          </Heading>
          <Flex
            sx={{
              gap: ['12px', '20px', '20px'],
              mt: ['24px', '24px', '30px'],
              justifyContent: 'center',
            }}
          >
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=home"
              target="_blank"
            >
              <img src={ChromeIcon} alt="Chrome logo" width="20" height="20" />
              Chrome
            </Link>
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://microsoftedge.microsoft.com/addons/detail/vytal-spoof-timezone-l/nkaemodamjfefjgbefolnpnlccpdfpap"
              target="_blank"
            >
              <img src={EdgeIcon} alt="Edge logo" width="20" height="20" />
              Edge
            </Link>
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://addons.opera.com/en/extensions/details/vytal-spoof-timezone-location-user-agent/"
              target="_blank"
            >
              <img src={OperaIcon} alt="Opera logo" width="20" height="20" />
              Opera
            </Link>
          </Flex>
        </Box>
        <Block sx={{ width: ['100%', '100%', '45%'], mb: 0 }}>
          <HomeItem title="Timezone" value={scanData?.timezone || ' '} />
          <HomeItem title="Locale" value={scanData?.locale || ' '} />
          <HomeItem title="Date" value={scanData?.dateLocale || ' '} />
          <HomeItem title="Browser" value={scanData?.browser || ' '} />
          <HomeItem title="Platform" value={scanData?.platform || ' '} />
          <HomeItem title="Engine" value={scanData?.engine || ' '} />

          <Box
            sx={{
              p: ['12px', '12px 20px', '12px 20px'],
              borderRadius: '4px',
              background: 'secondaryBackground',
            }}
          >
            Test and compare Vytal and other extensions using the{' '}
            <Link variant="text" href="/#/scan">
              full scan
            </Link>
            .
          </Box>
        </Block>
      </Box>
    </PageBody>
  )
}

export default HomePage
