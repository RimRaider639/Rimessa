import { Container, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { useLocation, useParams, useSearchParams} from "react-router-dom"
import {getData, postData} from '../Scripts/api'
import ProductItem from "../Components/ProductItem"
import Paginate from "../Components/Paginate"
import Sidebar from "../Components/Sidebar"
import Sort from "../Components/Sort"
import CustomBreadcrumb from "../Components/Breadcrumb"
import { AuthContext } from "../Context/AuthContext"

const LIMIT_PER_PAGE = 6
const getPage = (val) => {
    if (typeof(+val)!==Number || val<1 || !val){
        return 1
    }
    return val
}
const titleCase = (str) => {
    if (!str || !str.length) return str
    return str[0].toUpperCase()+str.slice(1)
}

const ACTION = {
    CAT: (payload) => {return {type:'CATEGORY', payload}},
    SUBCAT: (payload) => {return {type:'SUBCATEGORY', payload}},
    BRAND: (payload) => {return {type:'BRAND', payload}},
    PAGE: (payload) => {return {type:'PAGE', payload}},
    ORDERBY: (payload) => {return {type:'ORDERBY', payload}},
    SORT: (payload) => {return {type:'SORT', payload}},
    UPDATEALL: (payload) => {return {type:'UPDATEALL', payload}}
}
const reducer = (state, action) => {
    switch (action.type){
        case 'CATEGORY' : return {...state, category:titleCase(action.payload)};
        case 'SUBCATEGORY' : return {...state, subCategory:titleCase(action.payload)};
        case 'BRAND' : return {...state, brand:titleCase(action.payload)};
        case 'PAGE' : return {...state, page:action.payload};
        case 'ORDERBY' : return {...state, order:action.payload};
        case 'SORT' : return {...state, sort:action.payload};
        case 'UPDATEALL' : return action.payload;
        default: return state;
    }
}

export default function Products(){
    const {userCred} = React.useContext(AuthContext)
    const [data, setData] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const loc = useLocation()
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const totalCount = React.useRef(0)
    const {type, category} = useParams()
    const initState = {
        category:titleCase(category), 
        subCategory:searchParams.get('category') || null, 
        brand:null, page:getPage(searchParams.get('page')), 
        order:searchParams.get('sort') || null, 
        department:titleCase(type), 
        sort:null
    }
    const [state, dispatcher] = React.useReducer(reducer, initState)
    //can segregate sort and orderby as searchparams later
    const getAllParams = () => {
        let params = {}
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }
    const fetchAndUpdate = (params) => {
        setIsLoading(true)
        getData('products', {...params, limit:LIMIT_PER_PAGE})
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

    const BREADCRUMB = [
        {path:'/', text:'Home'},
        {path:`/${state.department}`, text:state.department},
        {path:`/${state.department}/products/${state.category}/all`, text:state.category},
        {text:state.subCategory || 'all'},
    ]
    //handlers
    const handlePage = (val) => {
        dispatcher(ACTION.PAGE(state.page+val))
    }
    const handleSort = (val) => {
        setSearchParams({...getAllParams(), sort:val})
        dispatcher(ACTION.ORDERBY(val.length?val:null))
        dispatcher(ACTION.SORT(val.length?'mrp':null)) //change it to price later
        dispatcher(ACTION.PAGE(1))
    }
    const handleSubCategory = (cat) => {
        setSearchParams({category:cat})
        dispatcher(ACTION.SUBCAT(cat))
        dispatcher(ACTION.PAGE(1))
    }
    const addToCart = ({id, ...rest}) => {
        const prod = {
            prod_id: id,
            user_id: userCred.id,
            qtd:1,
            ...rest,
        }
        return postData(prod, 'cart')
    }

    React.useEffect(()=>{
        fetchAndUpdate(state)
    }, [state])

    React.useEffect(() => {
        dispatcher(ACTION.UPDATEALL(initState))
    },[loc.pathname]) 

    const paginate = {
        current: state.page,
        totalPages: Math.ceil(totalCount.current/LIMIT_PER_PAGE),
        handlePage,
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
                <CustomBreadcrumb links={BREADCRUMB}/>
                <Flex><Text >{totalCount.current} Products</Text></Flex>
                <Sort handleSort={handleSort} w="120px"/>
                <Paginate {...paginate}/>
            </Flex>
            <Divider/>
            <Flex>
                <Sidebar handleSubCategory={handleSubCategory} category={state.category}/>
                <Flex direction="column">
                    {/* display data */}
                    <SimpleGrid columns={{base:2, md:3}} spacing={6}>
                        {data.map(item=><ProductItem key={item.id} addToCart={addToCart} {...item}/>)}
                    </SimpleGrid>                    
                </Flex>
            </Flex>
            <Divider/>
            {/* pagination */}
            <Paginate {...paginate}/>
            <Divider/>
        </Flex>
        
    }
    </Container>
}