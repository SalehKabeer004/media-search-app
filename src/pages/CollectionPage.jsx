import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice.js"

const CollectionPage = (item) => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const handleClearCollection = () => {
    dispatch(clearCollection())
  }

  return (
    <>
      <div className="clear-collection lg:max-w-[1280px] m-auto p-6 flex items-center justify-between" ><h2>Your Media Collection</h2> <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:scale-95" onClick={handleClearCollection}>Clear Collection</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-0 p-8 lg:max-w-[1280px] min-h-[340px] m-auto">

        {
          collection.length > 0 ?
            collection.map(
              (item) => {
                return <CollectionCard key={item.id} item={item} />
              }) : <div className="col-span-full h-full flex items-center justify-center">
                <h2 className="text-center text-3xl font-normal">Your collection is empty</h2>
                </div>
        }

      </div>
    </>
  )
}

export default CollectionPage