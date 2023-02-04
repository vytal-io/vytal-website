import { Box, Heading, Image } from 'theme-ui'
import Block from 'components/Block'
import PageBody from 'components/PageBody'
import nordLogo from 'assets/nord.svg'
import surfSharkLogo from 'assets/surfShark.svg'
import VpnBlock from './VpnBlock'

const VpnsPage = () => {
  return (
    <PageBody title="VPN Recommendations">
      <Block sx={{ p: ['12px', '20px', '20px'], background: 'offWhite' }}>
        <Heading as="h1" variant="styles.h1">
          VPN Recommendations
        </Heading>
      </Block>
      <Box
        sx={{
          display: 'grid',
          gap: ['12px', '24px', '24px'],
          width: '100%',
          margin: '0 auto',
          gridTemplateColumns: ['none', 'none', 'repeat(2, 1fr)'],
        }}
      >
        <VpnBlock
          url="https://go.nordvpn.net/aff_c?offer_id=658&aff_id=79520&source=vw"
          linkText="Click for 63% off discount"
        >
          <Image src={nordLogo} alt="NordVPN logo" variant="vpnLogo" />
          <li>Verified zero-logs policy & no IP leaks</li>
          <li>5,600+ servers in 59 countries</li>
          <li>24/7 live chat support</li>
        </VpnBlock>
        <VpnBlock
          url="https://get.surfshark.net/aff_c?offer_id=926&aff_id=17240&source=vw"
          linkText="Click for 82% off + 2 mo. FREE"
        >
          <Image src={surfSharkLogo} alt="Surf Shark logo" variant="vpnLogo" />
          <li>Verified zero-logs policy & no IP leaks</li>
          <li>3200+ servers in 100 countries</li>
          <li>Unlimited device connections</li>
        </VpnBlock>
      </Box>
    </PageBody>
  )
}

export default VpnsPage
