import { Box } from 'theme-ui'
import Block from './Block'
import PageBody from './PageBody'
import FaqItem from './FaqItem'

const FaqPage = () => {
  return (
    <PageBody>
      <Block sx={{ p: '20px', background: 'offWhite' }}>
        <Box sx={{ fontSize: '24px' }}>Frequently Asked Questions</Box>
      </Block>
      <FaqItem title="What is Vytal and why should I use it?">
        Vytal is a browser extension that can spoof your timezone, locale,
        geolocation and user agent. This data can be used to determine your
        location and track you online even with a VPN. You can use Vytal to
        spoof this data and protect yourself online.
      </FaqItem>
      <FaqItem title="Is Vytal Free?">Yes, Vytal is 100% free!</FaqItem>
      <FaqItem title="How to hide debugging notification bar?">
        While spoofing data a notification bar becomes visible. Hiding the bar
        can be done by using the --silent-debugger-extension-api flag.
        Instructions on how to run chrome with flags.
      </FaqItem>
      <FaqItem title="Is Vytal available for FireFox?">
        Unfortunately Vytal doesn't work on Firefox since Firefox doesn't
        support the debugger API for extensions.
        https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#browser_compatibility
      </FaqItem>
      <FaqItem title="Does Vytal change your IP address?">
        No, Vytal does not change your IP address. To change your IP address you
        will need a VPN or proxy.
      </FaqItem>
      <FaqItem title="How to test the extension?">
        You can test and compare Vytal and other spoofing extensions using the
        scan tool.
      </FaqItem>
      <FaqItem title="Does Vytal collect and/or sell user data?">
        No, Vytal does not collect any data.
      </FaqItem>
      <FaqItem title="Is Vytal open source?">
        No, Vytal does not collect any data.
      </FaqItem>
    </PageBody>
  )
}

export default FaqPage
