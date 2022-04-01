import { Flex, Text, useColorModeValue } from "@chakra-ui/react"

interface IndicatorsProps {
  name: string
  quantity: number
}

export default function Indicators({name, quantity}:IndicatorsProps) {
  const color = useColorModeValue('light', 'dark')

  return (
    <Flex direction='column' justifyContent='center' alignItems='center'>
      <Text
        fontWeight={600}
        color={`${color}.highlight`}
        fontSize='48px'
        lineHeight='36px'
        textAlign='justify'
      >
        {quantity}
      </Text>
      <Text
        mt={2}
        fontWeight={600}
        color={`${color}.text`}
        fontSize='24px'
        lineHeight='36px'
        textAlign='justify'
      >
        {name}
      </Text>
    </Flex>
  )
}