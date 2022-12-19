import { Card, 
    CardBody, 
    CardFooter,
    Button,
    Image,
    Stack,
    Text,
    ButtonGroup,
    Divider,
    CardHeader,
} from '@chakra-ui/react'
import {BeatLoader} from '@chakra-ui/icons'
import React from 'react'

export default function ProductItem({name, brand, mrp, price, images, title, id, addToCart}){
  const [isAdding, setIsAdding] = React.useState(false)

  const cart = () => {
    const prod = {
      name, brand:'GUCCI', mrp, image:images[0], size:'M', id
    }
    setIsAdding(true)
    addToCart(prod)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
    .finally(setIsAdding(false)) //setting in finally cuz axios sends read only error and never gets to .then
  }

  return <Card maxW='sm'>
    <CardHeader>
      <ButtonGroup spacing='2'>
        <Button variant='outline'>
          Buy now
        </Button>
        <Button variant='ghost' isLoading={isAdding} onClick={cart}>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardHeader>
    <Divider />
    <CardBody alignContent='center' alignItems='center' justify='center' textAlign='center'>
      <Image
        src={images[0]}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Text textStyle='h3' size='md'>GUCCI</Text>
        <Text textStyle='h3' size='md'>{title}</Text>
        <Text textStyle='t1' color='secondary'>
          € {mrp}
        </Text>
      </Stack>
    </CardBody>
  </Card>

}