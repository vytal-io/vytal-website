import Block from './Block'
import PageBody from './PageBody'

const ErrorPage = () => {
  return (
    <PageBody>
      <Block sx={{ p: ['12px', '20px', '20px'], background: 'offWhite' }}>
        Error: page not found.
      </Block>
    </PageBody>
  )
}

export default ErrorPage
