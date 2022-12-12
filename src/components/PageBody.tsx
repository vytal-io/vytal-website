import { useEffect } from 'react'
import { Flex } from 'theme-ui'

interface PageBodyProps {
  title?: string
  children: React.ReactNode
}

const PageBody = ({ title, children }: PageBodyProps) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [])

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        pl: ['none', 'none', 'calc(100vw - 100%)'],
        flex: '1 0 auto',
      }}
    >
      <Flex
        sx={{
          width: '1000px',
          flexDirection: 'column',
          mt: ['18px', '24px', '24px'],
          mx: ['12px', '24px', '24px'],
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default PageBody
