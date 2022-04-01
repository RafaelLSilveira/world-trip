import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    colors: {
        dark: {
            background: 'var(--chakra-colors-blackAlpha-600)',
            headingAndText: '#47585B',
            text: '#DADADA',
            info: '#DADADA',
            infoHalf: 'rgba(153, 153, 153, 0.5)',
            icon: 'var(--chakra-colors-yellow-500)',
            highlight: 'rgba(255, 186, 8, 0.5)'
        },
        light: {
            background: '#EEEEEE',
            headingAndText: '#F5F8FA',
            text: '#47585B',
            info: '#999999',
            icon: 'black',
            highlight: '#FFBA08',
        },
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
            '.swiper-pagination-bullet.swiper-pagination-bullet-active': {
                background: 'highlight'
            },
            '.swiper-pagination-bullet': {
                padding: 2,
                opacity: 'unset',
                background: 'light.info'
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