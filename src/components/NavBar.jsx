import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Folder } from 'lucide-react';
import { House } from 'lucide-react';

const NavBar = () => {
  const collectionCount = useSelector(state => state.collection.items.length)
  return (
    <div className=" bg-gray-900 p-6 pb-0 lg:max-w-[1280px] m-auto sm:flex items-center justify-between gap-3" >
        <h1 className="text-2xl font-bold">Meedia Search App</h1>
        <div className="nav-btns flex gap-4 mt-2 sm:mt-0" >
            <Link to="/" className=" py-1 rounded-md  text-sm font-medium text-white active:scale-95">Home<House className="inline ml-1" /></Link>
            <Link to="/collection" className="relative  py-1 rounded-md text-sm font-medium text-white active:scale-95">Collection<Folder className="inline ml-1" /> 
            {collectionCount > 0 && 
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full" >
                    {collectionCount}
                </span>
            }
            </Link>
            
        </div>
    </div>
  )
}

export default NavBar