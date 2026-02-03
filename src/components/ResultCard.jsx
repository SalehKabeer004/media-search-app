
import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice.js";

const ResultCard = ({ item }) => {
    
    const dispatch = useDispatch();
    
    const addToCollection = (item) => {
        dispatch(addCollection(item));
    }

    return (
        <div className={`relative rounded-md shadow-md text-black h-[260px] overflow-hidden`}>
            {item.type === 'image' ?
                <img className="overflow-hidden mask-b-from-black  w-full h-full object-cover object-center rounded-md mb-2 " src={item.src} alt={item.title} />
                :
                <video controls className=" w-full h-[80%] object-cover object-center rounded-md mb-2 overflow-hidden">
                    <source src={item.src} type="video/mp4" />
                </video>
            }
            <div className="flex justify-between items-end gap-4 absolute bottom-2 left-2 right-2 p-2" >
                <h3 className=" text-xl font-normal text-white" >{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3>
                <button
                    onClick={() => {
                        addToCollection(item);
                    }}
                    className="bottom-2 right-2 bg-white text-black rounded-md p-1 hover:bg-gray-200 active:scale-95"><a >Save</a></button>
            </div>
        </div>
    )
}

export default ResultCard

// href={item.downloadLink || item.src} target="_blank" rel="noopener noreferrer"