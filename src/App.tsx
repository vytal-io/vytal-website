import { Flex, ThemeProvider } from 'theme-ui'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { theme } from './theme'
import HomePage from 'pages/home'
import ScanPage from 'pages/scan'
import DonatePage from 'pages/donate'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ErrorPage from 'pages/error'
import FaqPage from 'pages/faq'

const router = createHashRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/scan',
        element: <ScanPage />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/donate',
        element: <DonatePage />,
      },
    ],
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
