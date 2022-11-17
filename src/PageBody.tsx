import { Flex } from 'theme-ui'

interface PageBodyProps {
  children: React.ReactNode
}

const PageBody = ({ children }: PageBodyProps) => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          width: '1000px',
          mt: '24px',
          flexDirection: 'column',
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default PageBody
