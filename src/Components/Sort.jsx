import { Select, Flex } from "@chakra-ui/react";

export default function Sort({handleSort}){
    return <Flex align='center' justify='center'> 
        <Select onChange={(e)=>handleSort(e.target.value)} size='xsm' variant='flushed' colorScheme='blackAlpha' focusBorderColor='secondary'>
            <option value=''>Sort by</option>
            <option value='asc'>Price low-to-high</option>
            <option value='desc'>Price high-to-low</option>
            <option value=''>New items</option>
        </Select>
    </Flex> 
}