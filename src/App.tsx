import { ThemeProvider } from 'theme-ui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Scan from './Scan'
import Donate from './Donate'
import Header from './Header'
import { theme } from './theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scan />,
  },
  {
    path: '/donate',
    element: <Donate />,
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
