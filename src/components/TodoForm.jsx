import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const TodoForm = () => {
    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    );
}
 
export default TodoForm;