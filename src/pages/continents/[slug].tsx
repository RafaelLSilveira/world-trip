import { Flex, Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from "next/router"
import { IoMdInformationCircleOutline as InfoIcon } from 'react-icons/io'
import ButtonToTop from '../../components/ButtonToTop'
import Header from '../../components/Header'
import InternalBanner from '../../components/InternalBanner'
import Error from '../error'
import CityCard from "./CityCard"
import Indicators from './Indicatores'

interface CitiesInfo {
  thumbImage: string
  title: string
  subtitle: string
  icon: string
}

interface ContinentsProps {
  title: string
  content: string
  banner: string
  countriesCount: number
  languagesCount: number
  citiesCount: number
  citiesInfo: Array<CitiesInfo>
}

export default function Continents(props: ContinentsProps){
  const color = useColorModeValue('light', 'dark')
  const router = useRouter()
  
  const {
    title,
    banner,
    content,
    countriesCount,
    languagesCount,
    citiesCount,
    citiesInfo
  } = props

  if (router.isFallback) {
    return (<p>Carregando...</p>)
  }

  if(!title) {
    return <Error />
  }

  return (  
    <Flex
      p={0}
      m={0}
      direction='column'
      bgColor={ `${color}.background` }
    >
      <Header title={`Continente | ${title}`} isInternal/>
      <InternalBanner src={banner} title={title}/>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent='space-between'
        alignItems='center'
        margin='auto'
        mt='40px'
        mb='40px'
        maxWidth='1200px'
      >
        <Text
          ml='40px'
          maxWidth='50%'
          fontWeight={500}
          color={`${color}.text`}
          fontSize='24px'
          lineHeight='36px'
          textAlign='justify'
        >
          {content}
        </Text>
        <Stack direction='row' spacing={25}>
          <Indicators name='países' quantity={countriesCount} />
          <Indicators name='línguas' quantity={languagesCount} />
          <Indicators name='cidades +100' quantity={citiesCount} />    
          <Tooltip 
            label={`Nesse continente há ${citiesCount} cidades!`}
            color='black'
            backgroundColor='transparent'
            fontSize='md'
          >
            <span>
              <InfoIcon />
            </span>
          </Tooltip>          
        </Stack>
      </Flex>
        <Stack
          display='grid'
          gridTemplateColumns={['1fr', '1fr 1fr 1fr 1fr']}
          gridGap='20px'
          direction='row'
          maxW='1200px'
          margin='auto'
          marginBottom={10}
        >
          {
            citiesInfo.map((item) => <CityCard key={item.title} {...item} />)
          }
        </Stack>
      <ButtonToTop />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const staticPaths = [
    { params: { slug: 'europe' } }
  ]
  
  return {
    paths: [...staticPaths],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ContinentsProps> = async ({ params }) => {
  let data = null

  try {
    const { slug } = params
    const response = await fetch(`http://localhost:3004/continents?slug=${slug}`)
    
    data = await response.json()
    data = data[0]

    if(!response || !data) {
      return { notFound: true }
    }
  } catch (error) {
    return { notFound: true }
  }

  return {
    props: data
  }
}