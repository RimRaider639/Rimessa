import { defineStyleConfig } from '@chakra-ui/react'

const Container = defineStyleConfig({
    sizes: {
        md:{
            maxWidth: '6xl',
            p: 0,
        }
    },
    defaultProps: {
        size: 'md',
      },
})

export default Container;