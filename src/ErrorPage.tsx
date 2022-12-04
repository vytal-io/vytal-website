import Block from './Block'
import PageBody from './PageBody'

const ErrorPage = () => {
  return (
    <PageBody>
      <Block sx={{ p: '20px', background: 'offWhite' }}>
        Error: page not found.
      </Block>
    </PageBody>
  )
}

export default ErrorPage
