import { Image , Flex, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Banner({image, text=[], btn, spacing, ...rest}){
    const navigate = useNavigate()
    const onClick = (path) => {
        navigate(path)
    }
    return <Flex position='relative' mb='60px'>
        <Image src={image} alt={text.join(' ')}/>
        <Flex position='absolute' w='100%' h='100%'>
            {text.map(t=>{
                t = t.split('\n')
                let lines = []
                t.map(line => lines.push(<Text textStyle={line.slice(0,2)} color='white'>{line.slice(2,line.length)}</Text>))
                btn && lines.push(<Button>SHOP NOW</Button>)
            return <Flex {...rest} cursor='pointer' direction='column' onClick={()=>onClick(t.toLowerCase())} w={(1/text.length)*100+'%'} h='100%' align='center' justify='center'>{lines}</Flex>
        })}
        </Flex>
    </Flex>
}

