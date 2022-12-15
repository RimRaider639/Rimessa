import { Box, Container } from "@chakra-ui/react"
import Banner from "../Components/Banner"
const BANNER = {
    sale: `https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg`,
    cruise: `https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1`
}
export default function Home(){
    return <Container>
        <Banner image={BANNER.sale}/>
        <Banner image={BANNER.cruise}/>
    </Container>
}