import { defineStyleConfig } from '@chakra-ui/react'

const Container = defineStyleConfig({
    baseStyle: {
        p:0,
        m:'0 auto'
    },
    sizes: {
        md:{
            maxWidth: '6xl',
        },
        sm:{
            maxWidth:'100%',
        }
    },
    defaultProps: {
        size: {base:'sm',sm:'sm', md:'md'}
      },
})

export default Container;