import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../features/todos/todosSlice";


const TodoForm = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    return (
        <form onSubmit={(e)=>{e.preventDefault();}}>
            <HStack mt='4' mb='4'>
                <Input placeholder='Basic usage' value={content} onChange={e=>{setContent(e.target.value)}} />
                <button onClick={()=>dispatch(addAsyncTodos({title:content}))}>add</button>
            </HStack>
        </form>

    );
}
 
export default TodoForm;