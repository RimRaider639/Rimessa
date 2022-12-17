import { Button, Text, Flex } from "@chakra-ui/react";

export default function Paginate({current, totalPages, handlePage}){
    const Prev = () => <Button size='sm' disabled={current===1} onClick={()=>handlePage(-1)}>prev</Button>
    const Current = () => <Text>{current}</Text>
    const Next = () => <Button size='sm' disabled={current===totalPages} onClick={()=>handlePage(1)}>next</Button>
    return <Flex gap={2} align='center' p={2} >
        <Prev/>
        <Current/>
        <Next/>
    </Flex>
}