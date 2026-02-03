import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import { Search } from 'lucide-react';

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    return (
        <div className='p-6 bg-gray-900 lg:max-w-[1280px] m-auto' >
            <form action="submit" className='flex gap-6 items-center m-auto lg:max-w-[1280px]'
                onSubmit={(e) => {
                    e.preventDefault()
                    // console.log("Search submitted:", text)
                    dispatch(setQuery(text))
                    setText('')
                }}>
                <div className="search-field w-full flex items-center"><Search className="mr-3 " /><input  type="text" placeholder='Search...' className=' w-full p-3 rounded-md bg-gray-700 text-white outline-none '
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                /></div>
                
                <button className=' bg-white hover:bg-gray-100 text-black cursor-pointer active:scale-95 p-2 rounded-md'> Search </button>
            </form>
        </div>
    )
}

export default SearchBar