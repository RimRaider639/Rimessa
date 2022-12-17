import { Container, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { useLocation, useSearchParams} from "react-router-dom"
import {getData} from '../Scripts/api'
import ProductItem from "../Components/ProductItem"
import Paginate from "../Components/Paginate"
import Sidebar from "../Components/Sidebar"
import Sort from "../Components/Sort"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
const LIMIT_PER_PAGE = 6
const getPage = (val) => {
    if (typeof(+val)!==Number || val<1 || !val){
        return 1
    }
    return val
}
const titleCase = (str) => {
    return str[0].toUpperCase()+str.slice(1)
}
const ACTION = {
    CAT: (payload) => {return {type:'CATEGORY', payload}},
    SUBCAT: (payload) => {return {type:'SUBCATEGORY', payload}},
    BRAND: (payload) => {return {type:'BRAND', payload}},
    PAGE: (payload) => {return {type:'PAGE', payload}},
}
const reducer = (state, action) => {
    switch (action.type){
        case 'CATEGORY' : return {...state, cat:action.payload};
        case 'SUBCATEGORY' : return {...state, subCat:action.payload};
        case 'BRAND' : return {...state, brand:action.payload};
        case 'PAGE' : return {...state, page:action.payload};
        default: return state;
    }
}

export default function Products(){
    const [data, setData] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    // const [page, setPage] = React.useState(getPage(searchParams.page))
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const totalCount = React.useRef(0)
    const loc = useLocation() 
    const [_, type, ___, cat, subCat] = loc.pathname.split('/')
    const [state, dispatcher] = React.useReducer(reducer, {cat, subCat, brand:"", page:getPage(searchParams.page)})
    const fetchAndUpdate = (params) => {
        setIsLoading(true)
        getData('/products', {...params, limit:LIMIT_PER_PAGE})
        .then(res=>{
            console.log(res)
            setData(res.data)
            totalCount.current = res.headers['x-total-count']
        })
        .catch(err=>{
            console.log(err)
            setIsError(true)
        })
        .finally(setIsLoading(false))
    }
    const handlePage = (val) => {
        dispatcher(ACTION.PAGE(state.page+val))
    }
    const handleSort = (val) => {
        // fetchAndUpdate(page, 'price', val)
    }
    React.useEffect(()=>{
        setSearchParams({page:state.page})
        fetchAndUpdate({page:state.page, category:titleCase(state.cat), subCat:state.subCat})
    }, [state.page, state.cat])

    React.useEffect(() => {
        dispatcher(ACTION.PAGE(1))
        const [_, type, ___, cat, subCat] = loc.pathname.split('/')
        dispatcher(ACTION.CAT(cat))
       
    },[loc.pathname]) 
    console.log(state)
    const paginate = {
        current: state.page,
        totalPages: totalCount/LIMIT_PER_PAGE,
        handlePage
    }
    return <Container>
        <Divider/>
        {isLoading?<>
            <Text>Loading...</Text>
        </>
        : isError?<>
            <Text>Something went wrong...</Text>
        </>
        :
        
        <Flex direction='column'>
            {/* Heading */}
            {/* <Flex justify='center' p='30px 0'><Text fontSize='20px'>{state.cat.toUpperCase()}</Text></Flex> */}
            <Divider/>
            {/* sorting */}
            <Flex justify='space-between' align='center' textStyle='t3'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href=''>{type}</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href=''>{state.cat}</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <Text>{state.subCat}</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex><Text >{totalCount.current} Products</Text></Flex>
                <Sort handleSort={handleSort}/>
                <Paginate {...paginate}/>
            </Flex>
            <Divider/>
            <Flex>
                <Sidebar/>
                <Flex direction="column">
                    {/* display data */}
                    <SimpleGrid columns={{base:2, md:3}} spacing={6}>
                        {data.map(item=><ProductItem {...item}/>)}
                    </SimpleGrid>
                    {/* pagination */}
                    <Paginate {...paginate}/>
                </Flex>
            </Flex>
        </Flex>
        
    }
    </Container>
}