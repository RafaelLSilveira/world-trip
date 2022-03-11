import { Flex, Image } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex
      id='home'
      mt='5'
      mb='5'
      alignItems='center'
      justifyContent='center'
    >
      <Image src='/logo.svg' alt='world trip'/>
    </Flex>
  )
} 