import { Flex } from 'theme-ui'

interface PageBodyProps {
  children: React.ReactNode
}

const PageBody = ({ children }: PageBodyProps) => {
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
          mt: ['12px', '24px', '24px'],
          mx: ['12px', '24px', '24px'],
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default PageBody
