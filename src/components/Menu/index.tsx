import { Box, Flex, HStack } from "@chakra-ui/react";
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <Box 
      p={10}
      w="100%"
      mt={28}
    >
      <Flex 
        maxWidth='1160px'
        margin='auto'
        justifyContent='center'
        alignItems='center'
      >
        <HStack spacing='40' maxWidth='1160px' wrap='wrap'>
          <MenuItem label='vida noturna' iconSrc='/Images/Menu/cocktail.svg' />
          <MenuItem label='praia' iconSrc='/Images/Menu/surf.svg' />
          <MenuItem label='moderno' iconSrc='/Images/Menu/building.svg' />
          <MenuItem label='clássico' iconSrc='/Images/Menu/museum.svg' />
          <MenuItem label='mais...' iconSrc='/Images/Menu/earth.svg' />
        </HStack>
      </Flex>
    </Box>
  )
}