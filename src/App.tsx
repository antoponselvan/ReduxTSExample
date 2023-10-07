
import Add from './components/Add'
import List from './components/List'
import Products from './components/Products'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
    <Add/>
    <List/>
    <Products/>
    <Cart/>
    </Provider>
  )
}

export default App
