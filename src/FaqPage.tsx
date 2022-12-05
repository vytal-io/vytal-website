import { Box, Link } from 'theme-ui'
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
        Instructions on how to run chrome with flags.{' '}
        <Link
          variant="text"
          href="https://www.chromium.org/developers/how-tos/run-chromium-with-flags/"
          target="_blank"
        >
          Instructions on how to run chrome with flag
        </Link>
        .
      </FaqItem>
      <FaqItem title="Is Vytal available for FireFox?">
        Unfortunately Vytal doesn't work on Firefox since Firefox doesn't
        support the debugger API for extensions.
      </FaqItem>
      <FaqItem title="Does Vytal change your IP address?">
        No, Vytal does not change your IP address. To change your IP address you
        will need a VPN or proxy.
      </FaqItem>
      <FaqItem title="How to test the extension?">
        You can test and compare Vytal and other spoofing extensions using the
        scan tool{' '}
        <Link variant="text" href="/scan" target="_blank">
          Vytal scan tool
        </Link>
        .
      </FaqItem>
      <FaqItem title="Does Vytal collect and/or sell user data?">
        No, Vytal does not collect any data.
      </FaqItem>
      <FaqItem title="Is Vytal open source?">
        Yes, you can view the Vytal repositories on{' '}
        <Link variant="text" href="https://github.com/vytal-io" target="_blank">
          GitHub
        </Link>
      </FaqItem>
    </PageBody>
  )
}

export default FaqPage
