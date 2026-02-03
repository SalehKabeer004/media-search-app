import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, fetchVideos } from "../api/mediaApi.js";
import { setError, setResults, setLoading } from "../redux/features/searchSlice.js";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!query) return <h1>Search something ...</h1>
        const getData = async () => {
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab === 'Images') {
                    let response = await fetchImages(query);
                    data = response.results.map((img) => {
                        return {
                            id: img.id,
                            type: 'image',
                            src: img.urls.small,
                            downloadLink: img.links.download,
                            title: img.alt_description,
                            thumbnail: img.urls.thumb
                        }
                    })
                }
                if (activeTab === 'Videos') {
                    let response = await fetchVideos(query);
                    data = response.videos.map((vid, idx) => {
                        return {
                            id: vid.id,
                            type: 'video',
                            src: vid.video_files[0].link,
                            title: vid.user.name || ` Video ${idx + 1}`,
                            thumbnail: vid.image
                        }
                    })
                }
                // console.log("Fetched data:", data);   
                dispatch(setResults(data));
            } catch (err) {
                dispatch(setError(err));
            }


        }

        getData();
    }, [query, activeTab]);

    if (loading) {
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;
    }
    if (results.length === 0) {
        return <div className="text-center mt-10 text-gray-500">No results found.</div>;
    }
    if (error) {
        return <div className="text-center mt-10 text-red-500">An error occurred: {err.message}</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-0 p-8 lg:max-w-[1280px] m-auto">

            {results.map((item, idx) => {
                return <ResultCard key={idx} item={item} />
            })}
        </div>)
}

export default ResultGrid