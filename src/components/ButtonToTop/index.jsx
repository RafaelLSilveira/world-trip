import { Button, useColorModeValue } from '@chakra-ui/react'

export default function ButtonToTop() {
    const color = useColorModeValue('light', 'dark')

    return (
        <Button
            m={5}
            as='a'
            href='#'
            type='button'
            position='fixed'
            right='0' 
            bottom='0'
            backgroundColor={`${color}.highlight`}
            color={`${color}.text`}
            fontSize='2xl'
            transition='filter 1s'
            _hover={{
                backgroundColor: `${color}.highlight`,
                color: `${color}.text`,
                filter: 'brightness(0.5)'
            }}
        >
          ^
        </Button>
    )
}