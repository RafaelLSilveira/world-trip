import { Flex, Icon, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosArrowBack, IoIosMoon, IoIosSunny } from 'react-icons/io'

interface HeaderProps {
  title: string
  isInternal?: boolean
}

export default function Header({title, isInternal = false}:HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('light', 'dark')

  return (
    <Flex
      mt='5'
      mb='5'
      alignItems='center'
      justifyContent='center'
      aria-label='header'
    >
      <Head>
        <title>{title}</title>
      </Head>
      { isInternal
        ?
          <Link href='/' passHref>
            <span>
              <Icon 
                as={IoIosArrowBack}
                color={`${color}.text`}
                position='absolute'
                cursor='pointer'
                ml='10%'
                left={0}
                mt='-15px'
                w={8}
                h={8}
              />
            </span>
          </Link>
        : null
      }
      <Icon 
        as={ colorMode === 'light' ? IoIosMoon : IoIosSunny  }
        onClick={toggleColorMode}
        position='absolute'
        cursor='pointer'
        mr='2%'
        right={0}
        w={8}
        h={8}
        color={`${color}.icon`}
      />
      <Image src='/logo.svg' alt='world trip logo'/>
    </Flex>
  )
} 