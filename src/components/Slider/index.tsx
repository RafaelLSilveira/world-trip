import { Box } from '@chakra-ui/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperItem from './SwiperItem'

export default function Slider() {
    return (
        <Box 
            p={10}
            w='100%'
            h='450px'
            mt={28}
            m='0 auto'
            maxWidth='1240px'
            aria-label='slider'
        >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <SwiperItem slug='north-america' title='América do Norte' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/NorthAmerica/north-america.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  slug='south-america' title='América do Sul' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/SouthAmerica/south-america.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem slug='asia' title='Ásia' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Asia/asia.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  slug='africa' title='África' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Africa/africa.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  slug='europe' title='Europa' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Europe/europe.svg' />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem  slug='oceania' title='Oceania' subtitle='O continente mais antigo.' imgSrc='/Images/Continents/Oceania/oceania.jpg' />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}