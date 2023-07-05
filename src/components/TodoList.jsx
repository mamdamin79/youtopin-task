import {useEffect} from "react"
import { HStack, Box, VStack, IconButton, Flex, Button, Text, StackDivider, Center, Spinner } from '@chakra-ui/react'
import {useDispatch ,useSelector} from "react-redux"
import { deleteAsyncTodos, getAsyncTodos, toggleCompleteAsync } from "../features/todos/todosSlice"
import Modal from './DeleteModal'
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"

const TodoList = () => {
    const {todos,loading,error} = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    //fetch data
    useEffect(()=>{
        dispatch(getAsyncTodos())
    },[])

    if (loading) return <Center> <Spinner /> </Center>
    if (error) return <Center><p color="red">your request failed</p></Center> 
    return (
      <>
        {
            todos.length > 0 ? <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            width={100}
            p='5'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            alignItems='stretch'

            >
                {todos.map((todo) =>(
                <HStack
                key={todo.id}
                opacity={todo.compeleted == true ? '0.2' : '1'}
                >
                    <Text
                        w='100%' 
                        p='8px'
                        borderRadius='lg'
                        as={todo.completed == true ? 's' : ''}
                        cursor='pointer'
                        >
                        {todo.title}
                    </Text>
                    <Button px="6" variant='outline' onClick={() =>dispatch(toggleCompleteAsync({ id:todo.id, title:todo.title, completed: !todo.completed }))} colorScheme='blue'>{todo.completed ? "complete":"in progress"}</Button>
                    <Modal   todo={todo}/>
                    <EditModal todo={todo}/>
                </HStack>
            ))}    
              
        </VStack>:<p>there is no task in your todo list</p>
        }
    </>
  );
}

 
export default TodoList;