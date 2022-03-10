import { Flex } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Menu from '../components/Menu'

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
    </Flex>
  )
}
