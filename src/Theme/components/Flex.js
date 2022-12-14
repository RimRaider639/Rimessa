import { defineStyleConfig } from '@chakra-ui/react'

const Flex = defineStyleConfig({
    variants : {
        active: {
            bg: 'gray.600',
            border: '2px solid black'
        }
    },
    baseStyle: {
        bg: 'gray.600'
    }
})

export default Flex;