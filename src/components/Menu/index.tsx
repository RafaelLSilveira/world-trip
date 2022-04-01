import { Box, Flex, HStack } from "@chakra-ui/react";
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <Box 
      p={10}
      w="100%"
      mt={28}
      aria-label='menu'
    >
      <Flex 
        maxWidth='1160px'
        margin='auto'
        justifyContent='center'
        alignItems='center'
      >
        <HStack spacing='40' maxWidth='1160px' wrap='wrap'>
          <MenuItem label='vida noturna' alt='boates ou pubs' iconSrc='/Images/Menu/cocktail.svg' />
          <MenuItem label='praia' alt='praias ou lugares em ambientes abertos' iconSrc='/Images/Menu/surf.svg' />
          <MenuItem label='moderno' alt='construções modernas' iconSrc='/Images/Menu/building.svg' />
          <MenuItem label='clássico' alt='museus ou teatross' iconSrc='/Images/Menu/museum.svg' />
          <MenuItem label='mais...' alt='outros lugares' iconSrc='/Images/Menu/earth.svg' />
        </HStack>
      </Flex>
    </Box>
  )
}