import logo from '/logo.svg'
import cart from '/cart.svg'

export default function Header() {
    return (
        <div className="header flex items-center justify-between">
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>React Pizza</h1>
                    <p className='text-gray-500'>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className='bg-orange-500 flex gap-5 items-center justify-center p-4 rounded-full'>
                <span>520тг</span>
                <hr />
                <div>
                    <img src={cart} alt="" />
                </div>

            </div>
        </div>
    )
}