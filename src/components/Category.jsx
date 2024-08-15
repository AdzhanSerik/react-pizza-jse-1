export default function Category() {
    return (
        <ul className="flex items-center justify-between basis-1/2 gap-3">
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Все</li>
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Мясные</li>
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Вегетарианская</li>
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Гриль</li>
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Острые</li>
            <li className="bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer">Закрытые</li>
        </ul>

    )
}