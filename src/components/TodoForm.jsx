import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../features/todos/todosSlice";


const TodoForm = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    const toast = useToast()
    const addTodo = ()=>{
        if (content) {
            dispatch(addAsyncTodos({title:content}));
            toast({
                title: 'todo added.',
                description: "We've added your task.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
        else{
            toast({
                title: 'title is required',
                description: "you should add a title for your task.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        setContent("");
    }
    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <HStack mt='4' mb='4' mx="10">
                <Input placeholder='todo title...' value={content} onChange={e=>{setContent(e.target.value)}} />
                <Button variant="solid" colorScheme="blue" onClick={()=>addTodo()}>add</Button>
            </HStack>
        </form>

    );
}
 
export default TodoForm;