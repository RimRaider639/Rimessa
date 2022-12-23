
import { Flex, 
    Link, 
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Divider,
    useColorModeValue,
 } from "@chakra-ui/react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { LINKS_LEFT, LINKS_RIGHT } from "./data"
import ToggleThemeBtn from "../../toggleThemeBtn"
import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext"
import Button from "../../Button"



export default function Top(){
    const location = useLocation()
    const {userCred, isAuth, logout} = useContext(AuthContext)
    const bg = useColorModeValue('white', 'black')
  
    return <Flex minH="40px" justifyContent='space-between' bg = {bg}>
        {/* left */}
        <Flex  align='center' gap={2}>
            {
                LINKS_LEFT.map(link=>
                <Flex h='100%' align='center' p='0 10px' bg={location.pathname.includes(link.path)?"lightGrey":""}>
                    <Link as={RouterLink} to={link.path}>
                        <Text textStyle='h4' color='text'>{link.text}</Text>
                    </Link>
                </Flex>)
            }
        </Flex>

        {/* right */}
        <Flex>
            {
                LINKS_RIGHT.map(link=> link.text==='My account'?
                <Popover trigger={'hover'} placement={'bottom'}>
                    <PopoverTrigger>
                        <Flex h='100%' align='center' p='0 5px'>
                            <Link as={RouterLink} to={link.path} variant='highlight'>
                                <Text textStyle='t2'>{link.text}</Text>
                            </Link>
                        </Flex>
                    </PopoverTrigger>
                    {isAuth?
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                            <Text>Welcome!</Text>
                            <Divider/>
                            <Text>{userCred.firstName+' '+userCred.lastName}</Text>
                        </PopoverHeader>
                        <PopoverBody><Button text='log out' onClick={logout}/></PopoverBody>
                    </PopoverContent>
                    :""}
                </Popover>:
                <Flex h='100%' align='center' p='0 5px'>
                    <Link as={RouterLink} to={link.path} variant='highlight'>
                        <Text textStyle='t2'>{link.text}</Text>
                    </Link>
                </Flex>    
                )
            }
            <ToggleThemeBtn/>

        </Flex>
    </Flex>
}