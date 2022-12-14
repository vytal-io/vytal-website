import { useState } from 'react'
import { Box, Button, Flex, Heading, Paragraph } from 'theme-ui'
import { ChevronUp, ChevronDown } from 'react-feather'

interface FaqItemProps {
  title: string
  children: React.ReactNode
}

const FaqItem = ({ title, children }: FaqItemProps) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Button variant="block" onClick={() => setShowAnswer(!showAnswer)}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading
          variant="styles.h2"
          sx={{ fontSize: ['16px', '18px', '18px'], width: '100%' }}
        >
          {title}
        </Heading>
        <Box sx={{ width: '30px', height: '30px', color: 'icon' }}>
          {showAnswer ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </Box>
      </Flex>
      {showAnswer && (
        <Box sx={{ mt: '10px' }}>
          <Paragraph
            sx={{
              all: 'unset',
              color: 'textSecondary',
            }}
          >
            {children}
          </Paragraph>
        </Box>
      )}
    </Button>
  )
}

export default FaqItem
