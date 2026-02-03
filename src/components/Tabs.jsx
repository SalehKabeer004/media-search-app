import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
    const tabs = ['Images', 'Videos'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className=' p-6 pt-0 bg-gray-900 text-center' >
            {tabs.map((tab) => (
                <button 
                onClick={()=>{
                    dispatch(setActiveTab(tab))
                }}
                key={tab} 
                className={`mr-4 transition rounded p-1 cursor-pointer active:scale-95 ${tab === activeTab ? 'bg-white text-black' : 'text-white'}`} >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs
