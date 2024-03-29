import { Box, Container, Image, Flex } from "@chakra-ui/react"
import Banner from "../Components/Banner"
import Button from "../Components/Button"
import Carousal from "../Components/Carousal"

const IMAGES = {
    men_women: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1',
    kids: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1',
    life: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1',
}

export default function Home(){
    return <Container>
        <Banner image={IMAGES.men_women} text={['h1Women', 'h1Men']} links={['women', 'men']}/>
        <Banner image={IMAGES.kids} text={['h1Kids']} links={['kids']}/>
        <Banner image={IMAGES.life} text={['h1Life']} links={['life']}/>
        <Flex direction='column' justify='center' align='center'>
            <Carousal/>
            <Flex>
                <Button text='SHOP NOW'/>
            </Flex>
            
        </Flex>
        
    </Container>
}