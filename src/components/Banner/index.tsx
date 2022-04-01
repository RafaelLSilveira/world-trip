import { Box, Flex, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Banner() {
  const color = useColorModeValue('light', 'dark')

  return (
    <Box 
      p={10}
      w="100%"
      h='335px'
      background='url(/Images/Banner/background.svg) 100% no-repeat'
      backgroundSize='cover'
    >
      <Flex alignItems='center' justifyContent='space-around'>
        <Stack spacing={['2', '4']}>
          <Text
            as='h2'
            fontWeight={500}
            color={`${color}.headingAndText`}
            fontSize='36px'
            lineHeight='54px'
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
          <Text
            fontWeight='normal'
            color={`${color}.info`}
            fontSize='20px'
            lineHeight='30px'
          >
            Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
          </Text>
        </Stack>
        <Img src='/Images/Banner/airplane.svg' mb='-166px' alt='airplane' />
      </Flex>
    </Box>
  )
}   