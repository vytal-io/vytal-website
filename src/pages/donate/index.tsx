import { Flex, Heading } from 'theme-ui'
import Block from 'components/Block'
import DonateBlock from './DonateBlock'
import DonateLink from './DonateLink'
import PageBody from 'components/PageBody'

const DonatePage = () => {
  return (
    <PageBody title="Donate">
      <Block
        sx={{ p: ['12px', '20px', '20px'], background: 'backgroundSecondary' }}
      >
        <Heading as="h1" variant="styles.h1">
          Donate
        </Heading>
      </Block>
      <Flex
        sx={{
          flexDirection: 'column',
          gap: ['12px', '18px', '18px'],
        }}
      >
        <DonateLink
          title="Paypal"
          url="https://www.paypal.com/donate/?hosted_button_id=ZA299UEACUPLU"
        />
        <DonateBlock
          title="Bitcoin (BTC)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Ethereum (ETH)"
          address="0x15Af5373b737818D72F311ac8482870cD4dbfa89"
        />
        {/* <DonateBlock
          title="Monero (XMR)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Ripple (XRP)"
          address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        />
        <DonateBlock
          title="Dogecoin (DOGE)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Shiba Inu (SHIB)"
          address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        />
        <DonateBlock
          title="Tether (USDT)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="USD Coin (USDC)"
          address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        />
        <DonateBlock
          title="Binance Coin (BNB)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Binance USD (BUSD)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Litecoin (LTC)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        />
        <DonateBlock
          title="Cardano (ADA)"
          address="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
        /> */}
      </Flex>
    </PageBody>
  )
}

export default DonatePage
