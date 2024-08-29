/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import cart from '/cart.svg'

export default function Header({
    searchInput,
    setSearchInput }) {
    const navigate = useNavigate()
    function goToCart(link) {
        navigate(link)
    }


    return (
        <div className="header flex items-center justify-between">
            <div onClick={() => goToCart('/')} className='flex items-center gap-4 cursor-pointer'>
                <img src="/logo.svg" alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>React Pizza</h1>
                    <p className='text-gray-500'>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <input type="text" placeholder='Поиск' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <div onClick={() => goToCart('/cart')} className='bg-orange-500 flex gap-3 items-center justify-center py-2 px-6 rounded-full text-white cursor-pointer'>
                <span className='font-bold'>570 тг</span>
                <hr className='w-0.5 h-6 bg-orange-300 border-none rounded-xl' />
                <div>
                    <img src={cart} alt="" />
                </div>

            </div>
        </div>
    )
}