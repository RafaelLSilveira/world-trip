import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react'

export default function Banner() {
  return (
    <Box 
      p={10}
      w="100%"
      h='335px'
      background='url(/Images/Banner/background.svg) fixed no-repeat'
      backgroundSize='cover'
    >
      <Flex alignItems='center' justifyContent='space-around'>
        <Stack spacing={['2', '4']}>
          <Text
            fontWeight={500}
            color='light.headingAndText'
            fontSize='36px'
            lineHeight='54px'
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
          <Text
            fontWeight='normal'
            color='light.info'
            fontSize='20px'
            lineHeight='30px'
          >
            Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
          </Text>
        </Stack>
        <Img src='/Images/Banner/airplane.svg' mb='-166px'  />
      </Flex>
    </Box>
  )
}   