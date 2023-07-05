import {useEffect} from "react"
import { HStack, Box, VStack, IconButton, Flex, Button, Text, StackDivider } from '@chakra-ui/react'
import {useDispatch ,useSelector} from "react-redux"
import { getAsyncTodos } from "../features/todos/todosSlice"
const TodoList = () => {
    const {todos,loading,error} = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    console.log(todos)

    useEffect(()=>{
        dispatch(getAsyncTodos())
    },[])
    if (loading) return <p>loading...</p> 
    if (error) return <p>your request failed</p> 
  return (
      <>
        {
            todos.length > 0 && <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
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
                        as={todo.compeleted == true ? 's' : ''}
                        cursor='pointer'
                        >
                        {todo.title}
                    </Text>
                    {/* <DeleteTask task={task} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
                    <UpdateTask task={task} updateTask={updateTask} /> */}
                </HStack>
            ))}    
              
        </VStack>
        }

        <Flex>
            {/* <DeleteAllTask deleteTaskAll={deleteTaskAll} /> */}
        </Flex>
    </>
  );
}

 
export default TodoList;