import { 
    VStack, 
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
    Input,
    Box,
} from "@chakra-ui/react";
import React from 'react'
import { AuthContext } from "../Context/AuthContext";
import { validateLogin } from "../Scripts/api";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const initState = {
    email:"",
    pwd:"",
}

export default function LoginForm(){
    const [form, setForm] = React.useState(initState)
    const {email, pwd} = form
    const {login} = React.useContext(AuthContext)
    const [isError, setIsError] = React.useState(false)
    const navigate = useNavigate()
    const onChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        setForm({...form, [name]:val})
    }
    const onSubmit = () => {
        setIsError(!email.length || !pwd.length )
        if (!email.length || !pwd.length ){
            return
        }
        console.log(form)
        
        validateLogin('users', {
            email, pwd
        })
        .then(res=>{
            console.log(res)
            console.log(res)
            if (res.data.length){
                login(res.data[0])
                navigate('/')
            } else {
                alert('login unsuccessful')
            }
        })
        .catch(err=>console.log(err))
    }
    console.log(isError)
    return <VStack w='48%'>
    <Box w='100%'>
        <Text>ALREADY REGISTERED?</Text>
        <Text>If you have an account with us, please log in.</Text>
    </Box>
    <FormControl isInvalid={isError && !email.length}>
        <Input placeholder='email address *' type='email' isRequired name='email' value={email} onChange={onChange}/>
        {isError && !email.length?<FormErrorMessage>Email is required.</FormErrorMessage>:null}
    </FormControl>
    <FormControl isInvalid={isError && !pwd.length}>
        <Input placeholder='password *' type='password' isRequired name='pwd' value={pwd} onChange={onChange}/>
        {isError && !pwd.length?<FormErrorMessage>Password is required.</FormErrorMessage>:null}
    </FormControl>    
        <Text>* required fields</Text>
        <Button text="LOGIN" onClick={onSubmit}/>
        <Text textStyle='t1' fontSize='14px'>
            At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.
        </Text>

</VStack>
}