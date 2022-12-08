import { useState } from 'react'
import { Box, Button, Flex, Heading } from 'theme-ui'
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
          sx={{ fontSize: ['16px', '18px', '18px'] }}
        >
          {title}
        </Heading>
        {showAnswer ? (
          <ChevronUp color="#83878a" size={30} />
        ) : (
          <ChevronDown color="#83878a" size={30} />
        )}
      </Flex>
      {showAnswer && (
        <Box sx={{ mt: '10px', color: 'textSecondary' }}>{children}</Box>
      )}
    </Button>
  )
}

export default FaqItem
