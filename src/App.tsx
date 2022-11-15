import { ThemeProvider } from 'theme-ui'
import Body from './Body'
import Header from './Header'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
    </ThemeProvider>
  )
}

export default App
