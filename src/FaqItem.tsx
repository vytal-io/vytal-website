import { useState } from 'react'
import { Box, Button, Flex } from 'theme-ui'
import Block from './Block'
import { ChevronUp, ChevronDown } from 'react-feather'

interface FaqItemProps {
  title: string
  children: React.ReactNode
}

const FaqItem = ({ title, children }: FaqItemProps) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Button
      sx={{
        cursor: 'pointer',
        color: 'textPrimary',
        p: '20px',
        background: 'offWhite',
        border: '1px solid',
        borderColor: 'border',
        borderRadius: '4px',
        width: '100%',
        lineHeight: '24px',
        mb: '24px',
        textAlign: 'left',
        WebkitUserSelect: 'text',
        MozUserSelect: 'text',
        MsUserSelect: 'text',
        userSelect: 'text',
        ':hover': {
          borderColor: 'primary',
        },
      }}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ fontSize: '18px' }}>{title}</Box>
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
