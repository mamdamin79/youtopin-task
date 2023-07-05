// 1. import `ChakraProvider` component
import { ChakraProvider, IconButton, VStack} from '@chakra-ui/react'
import { store } from './features/store'
import { Provider } from 'react-redux'
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm'


function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
      <VStack p={4} minH='100vh' pb={28}>
          <TodoForm/>
          <TodoList/>
        </VStack>
      </Provider>
    </ChakraProvider>
    
  )
}

export default App
