import { Flex, Image, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"
import { FaRegDotCircle } from 'react-icons/fa'
interface MenuItemProps {
  label: string
  iconSrc: string
  alt: string
}

export default function MenuItem({label, iconSrc, alt}:MenuItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  const color = useColorModeValue('light', 'dark')

  return (
    <Flex direction={['row', 'column']} alignItems='center' >
      { 
        isWideVersion && <Image src={iconSrc} alt={alt}/>
      }
      { 
        !isWideVersion && <FaRegDotCircle style={{ fontWeight: 'extrabold', marginRight: 10, color: '#FFBA08' } } />
      }
      <Text
        mt={4}
        fontWeight='semibold'
        color={`${color}.text`}
        lineHeight='36px'
        size='24px'
      >
        {label}
      </Text>
    </Flex>
  )
}