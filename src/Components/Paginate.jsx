import { Button, Text, Flex } from "@chakra-ui/react";

export default function Paginate({current, totalPages, handlePage}){
    console.log(totalPages)
    const Prev = () => <Button disabled={current===1} onClick={()=>handlePage(-1)}>prev</Button>
    const Current = () => <Text>{current}</Text>
    const Next = () => <Button disabled={current===totalPages} onClick={()=>handlePage(1)}>next</Button>
    return <Flex>
        <Prev/>
        <Current/>
        <Next/>
    </Flex>
}