import { defineStyleConfig } from '@chakra-ui/react'



const Link = defineStyleConfig({
    baseStyle: {
        cursor: 'pointer',
        textDecoration: 'none',
        _hover: {
            textDecoration: 'none',
        },
    },
    variants: {
        highlight: {
            color: 'text',
            transition: 'color 0.5s',
            _hover: {
                color: 'text_hover'
            }
        }
    }
})

export default Link;