import { Box, Flex } from 'theme-ui'
import Block from './Block'
import DonateBlock from './DonateBlock'
import DonateLink from './DonateLink'
import PageBody from './PageBody'

const DonatePage = () => {
  return (
    <PageBody>
      <Block sx={{ p: '20px', background: 'offWhite' }}>
        <Box sx={{ fontSize: '24px' }}>Donate</Box>
      </Block>
      <Flex sx={{ gap: '24px' }}>
        <Box sx={{ width: '100%' }}>
          <DonateLink
            heading="Paypal"
            subHeading="https://www.paypal.com/donate/?hosted_button_id=ZA299UEACUPLU"
          />
          <DonateBlock
            heading="Bitcoin (BTC)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Monero (XMR)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Dogecoin (DOGE)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Tether (USDT)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Binance Coin (BNB)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Litecoin (LTC)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <DonateLink
            heading="Buy Me a Coffee"
            subHeading="https://www.buymeacoffee.com/vytal"
          />
          <DonateBlock
            heading="Ethereum (ETH)"
            subHeading="0x15Af5373b737818D72F311ac8482870cD4dbfa89"
          />
          <DonateBlock
            heading="Ripple (XRP)"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="Shiba Inu (SHIB)"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="USD Coin (USDC)"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="Binance USD (BUSD)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Cardano (ADA)"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
        </Box>
      </Flex>
    </PageBody>
  )
}

export default DonatePage
