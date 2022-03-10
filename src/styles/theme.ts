import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        dark: {
            black: '#000000',
            headingAndText: '#47585B',
            info: '#999999',
            infoHalf: 'rgba(153, 153, 153, 0.5)'
        },
        light: {
            white: '#EEEEEE',
            headingAndText: '#F5F8FA',
            info: '#DADADA'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global:{
            body: {
                bg: '#F5F8FA',
                color: '#47585B'
            }
        }
    }
})