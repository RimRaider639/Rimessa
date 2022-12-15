import { Card, 
    CardBody, 
    CardFooter,
    Button,
    Image,
    Stack,
    Text,
    ButtonGroup,
    Divider,
    } from '@chakra-ui/react'

export default function ProductItem({name, brand, mrp, price, image}){
    return <Card maxW='sm'>
    <CardBody>
      <Image
        src={image}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Text textStyle='h3' size='md'>{brand.toUpperCase()}</Text>
        <Text textStyle='h3' size='md'>{name}</Text>
        <Text textStyle='t1' color='blue.600' fontSize='2xl'>
          {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>

}