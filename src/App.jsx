// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './features/store'
import { Provider } from 'react-redux'
import TodoList from "./components/TodoList"



function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <TodoList/>
        </div>
      </Provider>
    </ChakraProvider>
    
  )
}

export default App
