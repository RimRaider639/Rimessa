import {Button as Btn} from '@chakra-ui/react'

export default function Button({variant, text, onClick, ...rest}){

    return <Btn {...rest} borderRadius={1} bg='primary' color='white' onClick={onClick} variant='solid'>{text}</Btn>
}