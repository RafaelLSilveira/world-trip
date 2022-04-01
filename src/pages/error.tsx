import { Flex, Img } from '@chakra-ui/react'
import Header from '../components/Header'

export default function Error() {
  return (
    <Flex
      p={0}
      m={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Header title='Página não encontrada' isInternal/>
      <Flex
        p={0}
        m={0}
        direction='column'
        justifyContent='center'
        alignItems='center'
        height='auto'
        width='100%'
      >
        <h1 style={{ fontSize: 'xx-large', backgroundColor:'dark.infoHalf' }}>📢 Erro 404 - Página não encontrada</h1>
        <Img src='/Images/Error/error.webp' alt='error image' />
      </Flex>
    </Flex>
  )
}
