import { Flex, Image, Text } from "@chakra-ui/react"

interface MenuItemProps {
  label: string
  iconSrc: string
}

export default function MenuItem({label, iconSrc}:MenuItemProps) {
  return (
    <Flex direction='column' alignItems='center' >
      <Image src={iconSrc} alt={label}/>
      <Text
        mt={4}
        fontWeight='semibold'
        color='dark.headingAndText'
        lineHeight='36px'
        size='24px'
      >
        {label}
      </Text>
    </Flex>
  )
}