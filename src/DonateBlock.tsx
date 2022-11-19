import { useState } from 'react'
import { Box, Button, Flex, Heading } from 'theme-ui'
import { Check, Copy } from 'react-feather'

interface DonateBlockProps {
  heading: string
  subHeading: string
}

const DonateBlock = ({ heading, subHeading }: DonateBlockProps) => {
  const [showCheck, setShowCheck] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(subHeading)
    setShowCheck(true)

    const timeId = setTimeout(() => {
      setShowCheck(false)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }

  return (
    <Button
      sx={{
        cursor: 'pointer',
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
      onClick={() => copyToClipboard()}
    >
      <Heading sx={{ mb: '8px' }}>{heading}</Heading>
      <Flex sx={{ alignItems: 'center', gap: '6px' }}>
        {showCheck ? (
          <Check color="#83878a" size={14} />
        ) : (
          <Copy color="#83878a" size={14} />
        )}
        <Box sx={{ color: 'textSecondary' }}>{subHeading}</Box>
      </Flex>
    </Button>
  )
}

export default DonateBlock
