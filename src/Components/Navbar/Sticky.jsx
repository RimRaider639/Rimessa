import React from "react";
import { Flex } from "@chakra-ui/react"

const scrolled = (pageOffset, navOffset) => {
    if (pageOffset>=navOffset){
        return true
    } else{
        return false
    }
}

export default function Sticky({children}){
    const barRef = React.useRef(null)
    const width = React.useRef(0)
    const top = React.useRef(0)

    const [offset, setOffset] = React.useState(0);
    const [sticky, setSticky] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        width.current = barRef.current.offsetWidth
        top.current = barRef.current.offsetTop
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    React.useEffect(()=>{
        setSticky(scrolled(offset, top.current))
        
    }, [offset])
    return <Flex direction='column' ref={barRef} position={sticky?'fixed':'relative'} zIndex={sticky?'200':""} width={sticky?width.current:""} bg='white' top={0} opacity={sticky?0.8:1}>
            {children}
        </Flex>
}