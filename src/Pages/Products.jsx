import { Container, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { useSearchParams } from "react-router-dom"
import {getData} from '../API/api'
import ProductItem from "../Components/ProductItem"
import Paginate from "../Components/Paginate"

const LIMIT_PER_PAGE = 6
const getPage = (val) => {
    if (typeof(+val)!==Number || val<1 || !val){
        return 1
    }
    return val
}


export default function Products(){
    const [data, setData] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = React.useState(getPage(searchParams.page))
    const totalPages = React.useRef(0)
    const fetchAndUpdate = (page, sort, orderBy, filter) => {
        getData('/products', {page, limit:LIMIT_PER_PAGE, sort, orderBy, filter})
        .then(res=>{
            console.log(res)
            setData(res.data)
            totalPages.current = res.headers['x-total-count']/LIMIT_PER_PAGE
        })
        .catch(err=>console.log(err))
    }
    const handlePage = (val) => {
        setPage(page+val)
    }

    React.useEffect(()=>{
        setSearchParams(page)
        fetchAndUpdate(page)
    }, [page])

    return <Container>
        <SimpleGrid columns={{base:2, md:3}} spacing={6}>
            {data.map(item=><ProductItem {...item}/>)}
        </SimpleGrid>
        <Paginate current={page} handlePage={handlePage} totalPages={totalPages.current}/>
    </Container>
}