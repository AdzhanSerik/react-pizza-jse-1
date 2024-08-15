import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort'

function App() {
  return (
    <div className='bg-orange-300 p-10 h-screen'>
      <div className='bg-white px-10 py-5 rounded-lg'>
        <Header />
        <div className='flex items-center justify-between mt-10'>
          <Category />
          <Sort />
        </div>
      </div>

    </div>
  )
}

export default App
