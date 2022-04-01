import { Box, Text, useColorModeValue } from '@chakra-ui/react'

interface InternalBannerProps {
  title: string
  src: string
}

export default function InternalBanner({title, src}:InternalBannerProps) {
  const color = useColorModeValue('light', 'dark')

  return (
    <Box 
      p={10}
      w="100%"
      h='500px'
      background={`url(${src}) 100% no-repeat`}
      backgroundSize='100%'
    >
      <Text
        fontWeight={600}
        color={`${color}.headingAndText`}
        fontSize='48px'
        lineHeight='72px'
        position='absolute'
        top={80}
        left={0}
        margin={20}
      >
        {title}
      </Text>
    </Box>
  )
}   