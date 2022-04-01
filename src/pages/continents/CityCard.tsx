import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
interface CityCardProps {
  thumbImage: string
  title: string
  subtitle: string
  icon: string
}

export default function CityCard(props:CityCardProps) {
  const color = useColorModeValue('light', 'dark')

  const {
    thumbImage,
    title,
    subtitle,
    icon
  } = props

  return (
    <Box
      margin='4px'
      border='1px solid'
      borderRadius='3px'
      borderColor={`${color}.highlight`}
    >
      <Image src={thumbImage} alt='icon'  width='256px' height='173px'/>
      <Flex justifyContent='space-between' p={4}>
        <Flex direction='column'>
          <Text
            fontWeight={600}
            color={`${color}.text`}
            fontSize='20px'
            lineHeight='25px'
          >
            {title}
          </Text>
          <Text
            mt={2}
            fontWeight={500}
            color={`${color}.info`}
            fontSize='16px'
            lineHeight='26px'
          >
            {subtitle}
          </Text>
        </Flex>
        <Image src={icon} alt='icon' width='30px' height='30px' />
      </Flex>
    </Box>
  )
}