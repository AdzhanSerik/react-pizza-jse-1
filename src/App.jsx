import './App.css'
// import data from './data.json'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort'
import PizzaList from './components/PizzaList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Sceleton from './components/Sceleton'


function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const scelet = Array(8).fill(0)

  useEffect(() => {
    axios
      .get("https://c12550f372786959.mokky.dev/items")
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })

  }, []);

  return (
    <div className='bg-orange-300 p-10'>
      <div className='bg-white px-10 py-10 rounded-lg'>
        <Header />
        <div className='flex items-center justify-between mt-10'>
          <Category />
          <Sort />
        </div>
        <div className='mt-10'>
          <div className='mb-10'><h2 className='font-bold text-3xl'>Все пиццы</h2></div>
          <div className='grid grid-cols-4 gap-5'>

            {
              isLoading ?
                scelet.map((value, index) => <Sceleton key={index} />) :
                data.map((pizza) => (
                  <PizzaList key={pizza.id} {...pizza} />
                ))
            }

          </div>
        </div>


      </div>

    </div >
  )
}

export default App
