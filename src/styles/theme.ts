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
        },
        highlight: '#FFBA08',
        highlightHalf: 'rgba(255, 186, 8, 0.5)'
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif'
    },
    styles: {
        global:{
            body: {
                bg: '#F5F8FA',
                color: '#47585B'
            },
            '.swiper': {
                width: '100%',
                height: '100%',
              },
            '.swiper-slide': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 18,
                background: '#fff',
            },
            '.swiper-slide img': {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            },
            '.swiper-pagination-bullet-active': {
                background: 'highlight'
            },
            '.swiper-pagination-bullet': {
                padding: 2
            },
            '.swiper-button-prev': {
                marginLeft: 30,
                color: 'highlight'
            },
            '.swiper-button-next': {
                marginRight: 30,
                color: 'highlight'
            }
        }
    }
})