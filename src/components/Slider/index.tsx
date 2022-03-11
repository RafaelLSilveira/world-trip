import { Box, Flex, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperItem  from './SwiperItem'

export default function Slider() {
    console.warn(<SwiperItem  title='Europa' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />)
    return (
        <Box 
            p={10}
            w='100%'
            h='450px'
            mt={28}
            m='0 auto'
            maxWidth='1240px'
        >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <SwiperItem  title='Europa' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  title='Europa 2' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  title='Europa 3' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  title='Europa 4' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}