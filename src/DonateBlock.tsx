import { useState } from 'react'
import { Box, Button, Flex, Heading, Input } from 'theme-ui'
import { Check, Copy } from 'react-feather'

interface DonateBlockProps {
  title: string
  address: string
}

const DonateBlock = ({ title, address }: DonateBlockProps) => {
  const [showCheck, setShowCheck] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
    setShowCheck(true)

    const timeId = setTimeout(() => {
      setShowCheck(false)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }

  return (
    <Button variant="block" onClick={() => copyToClipboard()}>
      <Heading variant="styles.h2" sx={{ mb: '8px' }}>
        {title}
      </Heading>
      <Flex sx={{ alignItems: 'center', gap: '6px' }}>
        {showCheck ? (
          <Check color="#83878a" size={14} />
        ) : (
          <Copy color="#83878a" size={14} />
        )}
        <Input value={address} readOnly />
      </Flex>
    </Button>
  )
}

export default DonateBlock
