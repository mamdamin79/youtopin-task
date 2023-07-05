// 1. import `ChakraProvider` component
import { ChakraProvider} from '@chakra-ui/react'
import { store } from './features/store'
import { Provider } from 'react-redux'
import TodoList from "./components/TodoList"
import Modal from './components/EditModal'
import TodoForm from './components/TodoForm'


function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <div >
          <TodoForm/>
          <TodoList/>
          <Modal/>
        </div>
      </Provider>
    </ChakraProvider>
    
  )
}

export default App
