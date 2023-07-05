import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../features/todos/todosSlice";


const TodoForm = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    const addTodo = ()=>{
        dispatch(addAsyncTodos({title:content}));
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