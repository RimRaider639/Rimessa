import { 
    VStack, 
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
    HStack,
    Radio,
    RadioGroup,
    Input,
    Checkbox,
    Spacer,
    Flex,
    Box,
} from "@chakra-ui/react";
import React from 'react'
import Button from "./Button";
import { postData, validateLogin } from "../Scripts/api";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const initState = {
    title:"ms",
    firstName:"",
    lastName:"",
    email:"",
    pwd:"",
    newsletter: true,
}

export default function RegisterForm(){
    const [form, setForm] = React.useState(initState)
    const {firstName, lastName, email, pwd, newsletter} = form
    const {login} = React.useContext(AuthContext)
    const navigate = useNavigate()

    const onChange = (e) => {
        const name = e.target.name
        const val = name==='newsletter'?e.target.checked:e.target.value
        setForm({...form, [name]:val})
    }
    const onSubmit = () => {
        form.id = Math.random()*5000 + Date.now()
        console.log(form)
        validateLogin('users', {
            email
        })
        .then(res=>{
            console.log(res)
            if (res.data.length){
                alert('email already has an account')
            } else {
                postData(form, 'users')
                .then(res=>{
                    console.log(res)
                    
                })
                .catch(err=>console.log(err))
                .finally(()=>{
                    login(form)
                    navigate('/')
                })
                
            }
        })
        .catch(err=>console.log(err))
        
        .finally()
    }
    
    return <VStack w='48%'>
        <Box w='100%'>
            <Text>CREATE AN ACCOUNT</Text>
            <Text>Please enter the following information to create your account.</Text>
        </Box>
        
        <Box>
            <FormControl as='fieldset'>
                    <RadioGroup defaultValue='ms' name='title' onChange={onChange}>
                        <HStack spacing='24px'>
                            <Radio value='ms' _selected>Ms.</Radio>
                            <Radio value='mrs'>Mrs.</Radio>
                            <Radio value='mri'>Mr.</Radio>
                        </HStack>
                    </RadioGroup>
            </FormControl>
                <Input placeholder='first name *' isRequired name='firstName' value={firstName} onChange={onChange}/>
                <Input placeholder='last name *' isRequired name='lastName' value={lastName} onChange={onChange}/>
                <Input placeholder='email address *' type='email' required name='email' value={email} onChange={onChange}/>
                <Input placeholder='password *' type='password' isRequired name='pwd' value={pwd} onChange={onChange}/>
                <Input placeholder='confirm password *' type='password' isRequired name='confirmPwd'/>
                <Checkbox size='md' colorScheme='blue' defaultChecked alignItems='flex-start' name='newsletter' isChecked={newsletter} onChange={onChange}>
                    <FormLabel>
                        <Text>
                            From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.   
                        </Text>
                        <Spacer h={2}/>
                        <Text>
                            I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.
                        </Text>
                    </FormLabel>
                </Checkbox>
                <Text>* required fields</Text>
                <Button text="REGISTER" onClick={onSubmit}/>
            
        </Box>
        
    </VStack>
}