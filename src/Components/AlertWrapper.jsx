import {    
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton } from "@chakra-ui/react";

export default function AlertWrapper({children, onClose, isVisible}){
    
    return isVisible ? (
        <Alert status='success'>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your order is placed!
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      ) : children
}