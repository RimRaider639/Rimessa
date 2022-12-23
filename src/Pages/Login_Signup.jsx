import { 
    Divider, 
    Flex, 
    Container, 
    Center
} from "@chakra-ui/react";
import LoginForm from "../Components/login";
import RegisterForm from "../Components/RegisterForm";

export default function Login_Signup(){

    return <Container>
        <Flex>
            <RegisterForm/>
            <Center height='100%' w="30px">
                <Divider orientation='vertical'/>  
            </Center>
            <LoginForm/>
        </Flex>
    </Container>
}