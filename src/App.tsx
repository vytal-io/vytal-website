import { ThemeProvider } from 'theme-ui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScanPage from './ScanPage'
import DonatePage from './DonatePage'
import Header from './Header'
import { theme } from './theme'

const router = createBrowserRouter([
  {
    path: '/',
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
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
