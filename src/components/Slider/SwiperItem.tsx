import { Flex, Text } from "@chakra-ui/react"

interface SwiperItemProps {
    title: string
    subtitle?: string
    imgSrc: string
}

export default function SwiperItem({title, subtitle, imgSrc}:SwiperItemProps) {
    return (
        <Flex   
            direction='column'
            justifyContent='center'
            alignContent='center'
            height='100%'
            width='100%'
            backgroundImage={imgSrc}
        >
            <Text
                fontWeight='bold'
                color='light.headingAndText'
                fontSize='48px'
                lineHeight='72px'
            >
                {title}
            </Text>
            { !!subtitle &&
                <Text
                    fontWeight='bold'
                    color='light.info'
                    fontSize='24px'
                    lineHeight='36px'
                >
                    {subtitle}
                </Text>
            }
        </Flex>
    )
}