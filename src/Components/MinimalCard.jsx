import { VStack, Text, Image } from "@chakra-ui/react";

export default function MinimalCard({image, brand, price, imgH, ...rest}){
    return <VStack {...rest}>
        <Image src = {image} alt={brand} h={imgH} display='block' m='0 auto'/>
        <Text textStyle='h3'>{brand}</Text>
        <Text textStyle='h3' fontWeight='600'>€{price}</Text>
    </VStack>
}