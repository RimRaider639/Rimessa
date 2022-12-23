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
    Link
} from '@chakra-ui/react'
import {BeatLoader} from '@chakra-ui/icons'
import React from 'react'
import { CartContext } from '../Context/CartContext'
import {Link as RouterLink, useLocation, useParams} from 'react-router-dom'

export default function ProductItem({name, brand, mrp, price, images, title, id, addToCart}){
  const [isAdding, setIsAdding] = React.useState(false)
  const {updateCartData} = React.useContext(CartContext)
  const [switchImage, setSwitchImage] = React.useState(false)
  const {type, category }= useParams()

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
    .finally(()=>{
      setIsAdding(false)
      updateCartData()
    }
      ) //setting in finally cuz axios sends read only error and never gets to .then
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
    <Link as={RouterLink} to={`/${type}/products/${category}/${id}`}>
      <CardBody alignContent='center' alignItems='center' justify='center' textAlign='center'>
        <Image
          src={switchImage?images[1]:images[0]}
          _hover={{src:images[1]}}
          alt={name}
          borderRadius='lg'
          onMouseOver={()=>setSwitchImage(true)}
          onMouseOut={()=>setSwitchImage(false)}
        />
        <Stack mt='6' spacing='3'>
          <Text textStyle='h3' size='md'>GUCCI</Text>
          <Text textStyle='h3' size='md'>{title}</Text>
          <Text textStyle='t1' color='secondary'>
            € {mrp}
          </Text>
        </Stack>
      </CardBody>
    </Link>
    
  </Card>

}