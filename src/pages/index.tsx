import { Divider, Flex, Text } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import ButtonToTop from '../components/ButtonToTop'

export default function Home() {
  return (
    <Flex
      p={0}
      m={0}
      direction='column'
    >
      <Header />
      <Banner />
      <Menu />
      <Divider margin='0 auto' width='90px' border='2px solid #47585B'/>
      <Flex 
        alignItems='center'
        justifyContent='center'
        direction='column'
        mt={10}
      >
        <Text
          fontWeight='semibold'
          color='dark.headingAndText'
          lineHeight='54px'
          fontSize='36px'
        >
          Vamos nessa?
        </Text>
        <Text
          mt={1}
          fontWeight='semibold'
          color='dark.headingAndText'
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
