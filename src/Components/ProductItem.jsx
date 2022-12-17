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

export default function ProductItem({name, brand, mrp, price, images, title}){
    return <Card maxW='sm'>
    <CardHeader>
      <ButtonGroup spacing='2'>
        <Button variant='solid'>
          Buy now
        </Button>
        <Button variant='ghost'>
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