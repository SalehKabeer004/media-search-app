import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchImages(query, page = 1, per_page = 10) {
    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            params: {query, page, per_page},
            headers: {authorization: `Client-ID ${UNSPLASH_KEY}`}
        }
    )
    return response.data
}

export async function fetchVideos(query, per_page = 10) {
    const response = await axios.get('https://api.pexels.com/videos/search',
        {
            params: {query, per_page},
            headers: {authorization:PEXELS_KEY}
        }
    )
    return response.data
}