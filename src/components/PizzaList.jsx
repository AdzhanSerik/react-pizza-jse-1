import { useState } from 'react';
import plusOrange from '/plusOrange.svg'



export default function PizzaList(pizzas) {
    const data = pizzas.pizzas.pizzas
    console.log(data)
    const [doughType, setDoughType] = useState('тонкое');
    const [size, setSize] = useState('26 см.');
    return (
        <div className='mt-10'>
            <div className='mb-10'><h2 className='font-bold text-3xl'>Все пиццы</h2></div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    data.map((pizza, index) => (
                        <div key={index} className=' flex flex-col justify-center items-center gap-3'>
                            <img src={pizza.imageUrl} alt="" />
                            <h3 className='font-bold text-xl'>{pizza.name}</h3>
                            <div className="p-4 bg-gray-100 rounded-xl">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <button
                                        className={`py-2 px-4 rounded-lg font-medium ${doughType === 'тонкое' ? 'bg-white shadow' : 'bg-gray-200'}`}
                                        onClick={() => setDoughType('тонкое')}>
                                        тонкое
                                    </button>
                                    <button
                                        className={`py-2 px-2 rounded-lg font-medium ${doughType === 'традиционное' ? 'bg-white shadow' : 'bg-gray-200'}`}
                                        onClick={() => setDoughType('традиционное')}>
                                        традиционное
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <button
                                        className={`py-2 px-3 rounded-lg font-medium ${size === '26 см.' ? 'bg-white shadow' : 'bg-gray-200'}`}
                                        onClick={() => setSize('26 см.')}>
                                        26 см.
                                    </button>
                                    <button
                                        className={`py-2 px-3 rounded-lg font-medium ${size === '30 см.' ? 'bg-white shadow' : 'bg-gray-200'}`}
                                        onClick={() => setSize('30 см.')}>
                                        30 см.
                                    </button>
                                    <button
                                        className={`py-2 px-3 rounded-lg font-medium ${size === '40 см.' ? 'bg-white shadow' : 'bg-gray-200'}`}
                                        onClick={() => setSize('40 см.')}>
                                        40 см.
                                    </button>
                                </div>
                            </div>


                            <div className='flex justify-between items-center w-full'>
                                <span className='font-bold text-xl'>от 395 тг</span>
                                <div className='border border-orange-500 rounded-full flex items-center py-2 px-4 gap-2 text-orange-500 font-bold'>
                                    <img src={plusOrange} alt="" />
                                    <span>Добавить  </span>
                                </div>
                            </div>

                        </div>
                    ))
                }



            </div>
        </div>
    )
}
