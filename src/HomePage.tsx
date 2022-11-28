import { useState, useEffect } from 'react'
import { Box, Flex, Heading, Link } from 'theme-ui'
import Block from './Block'
import PageBody from './PageBody'
import ScanBlock from './ScanBlock'
import HomeItem from './HomeItem'
import ChromeIcon from './chrome.svg'
import EdgeIcon from './edge.svg'
import OperaIcon from './opera.svg'

const HomePage = () => {
  return (
    <PageBody>
      <Flex
        sx={{
          height: 'calc( 80vh - 84px)',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '45%' }}>
          <Box sx={{ fontSize: '50px', lineHeight: '65px' }}>
            Spoof Timezone, Geolocation, Locale and User Agent.
          </Box>
          <Box sx={{ fontSize: '18px', lineHeight: '30px', mt: '20px' }}>
            This data can be used to determine your location and track you
            online even with a VPN. Download the Vytal extension to spoof this
            data and protect yourself online.
          </Box>
          <Flex sx={{ gap: '20px', mt: '30px' }}>
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://chrome.google.com/webstore/detail/vytal-spoof-timezone-loca/ncbknoohfjmcfneopnfkapmkblaenokb?utm_source=header"
              target="_blank"
            >
              <img src={ChromeIcon} alt="Chrome logo" />
              Chrome
            </Link>
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://microsoftedge.microsoft.com/addons/detail/vytal-spoof-timezone-l/nkaemodamjfefjgbefolnpnlccpdfpap"
              target="_blank"
            >
              <img src={EdgeIcon} alt="Edge logo" />
              Edge
            </Link>
            <Link
              variant="button"
              sx={{ width: '135px' }}
              href="https://addons.opera.com/en/extensions/details/vytal-spoof-timezone-location-user-agent/"
              target="_blank"
            >
              <img src={OperaIcon} alt="Opera logo" />
              Opera
            </Link>
          </Flex>
        </Box>
        <Block sx={{ width: '45%' }}>
          <HomeItem title="Geolocation" value={'12,671, -58.345'} />
          <HomeItem title="Timezone" value={'America/Toronto'} />
          <HomeItem title="Locale" value={'en-CA'} />
          <HomeItem title="Browser" value={'Chrome'} />
          <HomeItem title="OS" value={'Windows'} />
          <HomeItem title="Platform" value={'Win64'} />
          <Flex
            sx={{
              p: '12px 20px',
              justifyContent: 'space-between',
              // fontSize: '18px',
              borderRadius: '4px',
              background: 'secondaryBackground',
            }}
          >
            Test using full scan here.
          </Flex>
        </Block>
      </Flex>
    </PageBody>
  )
}

export default HomePage
