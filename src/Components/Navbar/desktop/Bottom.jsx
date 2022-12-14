import { Flex, 
    useColorModeValue, 
    VStack, 
    Stack, 
    Text, 
    Popover, 
    PopoverTrigger, 
    PopoverContent,
    Box,
    Image,
 } from "@chakra-ui/react";
 import React, { useEffect } from 'react'

const LINKS = [
    {
        path: "#",
        text: "NEW ARRIVALS"
    },
    {
        path: "#",
        text: "DESIGNERS"
    },
    {
        path: "#",
        text: "CLOTHING",
        image: 'https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/WW_FLYOUTS/CW50_Flyout_Regular_1_2x_20221212121208.jpg',
        children: {
            'category': [
                'Dresses',
                'Jackets',
                'Coats',
                'Tops',
                'Knitwear',
                'Pants',
                'Skirts',
                'Suits & Co-ords',
                'Jeans',
                'Shorts',
                'Beachwear',
                'Activewear',
                'Skiwear',
                'Jumpsuits',
                'Bridal',
            ],
            'brand': [
                'Alexander McQueen',
                'Balenciaga',
                'Bottega Veneta',
                'Brunello Cucinelli',
                'Dolce&Gabbana',
                'Etro',
                'Gucci',
            ],
            'discover': [
                'New Arrivals',
                'Exclusives',
                'Essentials',
                'Party Dresses',
                'Essential Coats',
                'Cardigans',
            ]
        }
    },
    {
        path: "#",
        text: "SHOES",
        image: 'https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/WW_FLYOUTS/CW50_Flyout_1420x940_Winterboots_x2_20221213115119.jpg',
        children: {
            'category': [
                'Dresses',
                'Jackets',
                'Coats',
                'Tops',
                'Knitwear',
                'Pants',
                'Skirts',
                'Suits & Co-ords',
                'Jeans',
                'Shorts',
                'Beachwear',
                'Activewear',
                'Skiwear',
                'Jumpsuits',
                'Bridal',
            ],
            'brand': [
                'Alexander McQueen',
                'Balenciaga',
                'Bottega Veneta',
                'Brunello Cucinelli',
                'Dolce&Gabbana',
                'Etro',
                'Gucci',
            ],
            'discover': [
                'New Arrivals',
                'Exclusives',
                'Essentials',
                'Party Dresses',
                'Essential Coats',
                'Cardigans',
            ]
        }
    },
    {
        path: "#",
        text: "BAGS",
        image: 'https://img.mytheresa.com/media/static/raw/cms/l/LIFE_FO_2022_CW49/CW49_WW_HP_Flyout_Regular_1_2x_20221205153706.jpg',
        children: {
            'category': [
                'Dresses',
                'Jackets',
                'Coats',
                'Tops',
                'Knitwear',
                'Pants',
                'Skirts',
                'Suits & Co-ords',
                'Jeans',
                'Shorts',
                'Beachwear',
                'Activewear',
                'Skiwear',
                'Jumpsuits',
                'Bridal',
            ],
            'brand': [
                'Alexander McQueen',
                'Balenciaga',
                'Bottega Veneta',
                'Brunello Cucinelli',
                'Dolce&Gabbana',
                'Etro',
                'Gucci',
            ],
            'discover': [
                'New Arrivals',
                'Exclusives',
                'Essentials',
                'Party Dresses',
                'Essential Coats',
                'Cardigans',
            ]
        }
    },
    {
        path: "#",
        text: "ACCESSORIES",
        image: 'https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/WW_FLYOUTS/CW50_Flyout_Regular_2_2x_20221212121207.jpg',
        children: {
            'category': [
                'Dresses',
                'Jackets',
                'Coats',
                'Tops',
                'Knitwear',
                'Pants',
                'Skirts',
                'Suits & Co-ords',
                'Jeans',
                'Shorts',
                'Beachwear',
                'Activewear',
                'Skiwear',
                'Jumpsuits',
                'Bridal',
            ],
            'brand': [
                'Alexander McQueen',
                'Balenciaga',
                'Bottega Veneta',
                'Brunello Cucinelli',
                'Dolce&Gabbana',
                'Etro',
                'Gucci',
            ],
            'discover': [
                'New Arrivals',
                'Exclusives',
                'Essentials',
                'Party Dresses',
                'Essential Coats',
                'Cardigans',
            ]
        }
    },
    {
        path: "#",
        text: "FESTIVE SEASON"
    },
    {
        path: "#",
        text: "SALE"
    },
]

export default function Bottom(){
    const linkColor = useColorModeValue('gray.600', 'gray.400')
    const linkHoverColor = useColorModeValue('gray.400', 'gray.200')
    let boundary = React.useRef(null)
    React.useEffect(()=>{
        console.log(boundary)
        boundary = document.getElementById('boundary')
    }, [])
    
    return <Flex ref={boundary} id='boundary' minH="40px" align='center'>
        <Stack direction={'row'} spacing={4}>
           {LINKS.map((item) => (
            <Box key={item.text}>
            {<Popover border={10} borderColor={linkColor} trigger={'hover'} placement={'bottom'} boundary={boundary.current}>
                <PopoverTrigger>
                    <Text
                        textStyle='h4'
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                            cursor: 'pointer',
                    }}>
                        {item.text}
                    </Text>
                </PopoverTrigger>
    
                {item.children && (
                    <PopoverContent
                        key={item.textS}
                        minW={'6xl'}
                        p='30px'
                        textAlign='left'
                        >
                        <SubNav children={item.children} image={item.image}/>
                    
                    </PopoverContent>
                )}
                </Popover>}
            </Box>
            ))}
        </Stack>
    </Flex>
}

const LABELS = {
    'category': 'SHOP BY CATEGORY',
    'brand': 'TOP BRANDS',
    'discover': 'DISCOVER'
}

function SubNav({children, image}){
    const elements = []
    for (let key in children){
        elements.push(<VStack minW='100px'>
            <Flex>
                <Text textStyle='h3'>{LABELS[key]}</Text>
            </Flex>
            <VStack>
                {children[key].map(labels=>
                    <Text key={labels} variant='highlight'>{labels}</Text>)}
            </VStack>
        </VStack>)
    }
    return <Flex justifyContent='space-between'>
        {elements}
        <Flex maxW='50%'>
            <Image src={image} alt='product' />
        </Flex>
    </Flex>
}