import { Flex } from 'theme-ui'

interface PageBodyProps {
  children: React.ReactNode
}

const PageBody = ({ children }: PageBodyProps) => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        paddingLeft: 'calc(100vw - 100%)',
        flex: '1 0 auto',
      }}
    >
      <Flex
        sx={{
          width: '1000px',
          flexDirection: 'column',
          mt: '24px',
          mx: '24px',
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default PageBody
