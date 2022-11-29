import { Flex, ThemeProvider } from 'theme-ui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import ScanPage from './ScanPage'
import DonatePage from './DonatePage'
import Header from './Header'
import Footer from './Footer'
import { theme } from './theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/scan',
    element: <ScanPage />,
  },
  {
    path: '/donate',
    element: <DonatePage />,
  },
])

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </Flex>
    </ThemeProvider>
  )
}

export default App
