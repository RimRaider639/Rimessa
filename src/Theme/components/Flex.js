import { defineStyleConfig, MultiStyleConfig } from '@chakra-ui/react'

const Flex = defineStyleConfig({
    variants : {
        sticky: {
            position: 'fixed',
            top: '0',
            width: '80%',
            zIndex: '200',
            bg: 'white'
        },
        default: {
            position: 'static',
        }
    },
    defaultProps: {
        variant: 'default'
    }
})

export default Flex;