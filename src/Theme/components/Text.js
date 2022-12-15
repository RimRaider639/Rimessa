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
    }
})

export default Text;