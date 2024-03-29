import { Button, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ToggleThemeBtn(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        bg='none'
        _hover={{bg:'none'}}
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
  );
}