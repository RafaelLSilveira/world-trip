import { Button } from '@chakra-ui/react'

export default function ButtonToTop() {
    return (
        <Button
            m={5}
            as='a'
            href='#'
            type='button'
            position='fixed'
            right='0' 
            bottom='0'
            backgroundColor='highlight'
            color='light.headingAndText'
            fontSize='2xl'
            transition='filter 1s'
            _hover={{
                backgroundColor: 'highlight',
                color: 'light.headingAndText',
                filter: 'brightness(0.5)'
            }}
        >
          ^
        </Button>
    )
}