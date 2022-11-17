import { Box, Flex } from 'theme-ui'
import DonateBlock from './DonateBlock'
import PageBody from './PageBody'

const DonatePage = () => {
  return (
    <PageBody>
      <Flex sx={{ gap: '24px' }}>
        <Box sx={{ width: '100%' }}>
          <DonateBlock
            heading="Paypal"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="Bitcoin"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Monero"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Dogecoin"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
          <DonateBlock
            heading="Tether"
            subHeading="bc1q5zts58u5d2t0rhxndlx7pnrsy5twtfn4sw5m4e"
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <DonateBlock
            heading="Buy Me a Coffee (Credit Card)"
            subHeading="https://www.buymeacoffee.com/vytal"
          />
          <DonateBlock
            heading="Ethereum"
            subHeading="0x15Af5373b737818D72F311ac8482870cD4dbfa89"
          />
          <DonateBlock
            heading="Ripple"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="Shiba Inu"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
          <DonateBlock
            heading="USD Coin"
            subHeading="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
          />
        </Box>
      </Flex>
    </PageBody>
  )
}

export default DonatePage
