import { Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Banner from '../components/Banner'
import ButtonToTop from '../components/ButtonToTop'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Slider from '../components/Slider'

export default function Home() {
  const color = useColorModeValue('light', 'dark')
  
  return (
    <Flex
      p={0}
      m={0}
      direction='column'
      bgColor={ `${color}.background` }
    >
      <Header title='Home'/>
      <Banner />
      <Menu />
      <Divider margin='0 auto' width='90px' border={`2px solid ${color}.text`}/>
      <Flex 
        alignItems='center'
        justifyContent='center'
        direction='column'
        mt={10}
      >
        <Text
          as='h1'
          fontWeight='semibold'
          color={`${color}.text`}
          lineHeight='54px'
          fontSize='36px'
        >
          Vamos nessa?
        </Text>
        <Text
          as='h2'
          mt={1}
          fontWeight='semibold'
          color={`${color}.text`}
          lineHeight='54px'
          fontSize='36px'
        >
          Então escolha seu continente
        </Text>
      </Flex>
      <Slider />
      <ButtonToTop />
    </Flex>
  )
}
