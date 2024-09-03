import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/Routes'
import { createContext, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'



export const SearchContext = createContext()

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState('')
  const [price, setPrice] = useState(0)
  return (
    <div className='bg-orange-300 p-10'>

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>






      <div className='bg-white px-10 py-10 rounded-lg'>
        <BrowserRouter>
          <SearchContext.Provider value={{ searchInput, setSearchInput, price, setPrice }}>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} />
            <AppRouter searchInput={searchInput} />
          </SearchContext.Provider>
        </BrowserRouter>

      </div>

    </div >
  )
}

export default App
