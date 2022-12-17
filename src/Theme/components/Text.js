import { defineStyleConfig } from '@chakra-ui/react'



const Text = defineStyleConfig({
    variants: {
        highlight: {
            color: 'text',
            transition: 'color 0.5s',
            _hover: {
                color: 'text_hover',
                cursor: 'pointer',
            }
        },
    },
    baseStyle: {
        letterSpacing: '1.5px'
    }
})

export default Text;