// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './features/store'
import { Provider } from 'react-redux'



function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          salam
        </div>
      </Provider>
    </ChakraProvider>
    
  )
}

export default App
