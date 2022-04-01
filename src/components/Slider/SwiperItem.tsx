import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Link from 'next/link'

interface SwiperItemProps {
    title: string
    subtitle?: string
    imgSrc: string
    slug: string
}

export default function SwiperItem({title, subtitle, imgSrc, slug}:SwiperItemProps) {
    const color = useColorModeValue('light', 'dark')

    return (
        <Link href={`/continents/${slug}`} passHref>
            <Flex   
                as='a'
                direction='column'
                justifyContent='center'
                alignContent='center'
                height='100%'
                width='100%'
                backgroundSize='100%'
                backgroundImage={imgSrc}
            >
                <Text
                    fontWeight='bold'
                    color={ `${color}.headingAndText` }
                    fontSize='48px'
                    lineHeight='72px'
                >
                    {title}
                </Text>
                { !!subtitle &&
                    <Text
                        fontWeight='bold'
                        color={ `${color}.info` }
                        fontSize='24px'
                        lineHeight='36px'
                    >
                        {subtitle}
                    </Text>
                }
            </Flex>
        </Link>
    )
}