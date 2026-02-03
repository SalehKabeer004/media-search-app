import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: 'random',
        results: [],
        activeTab: 'Images',
        loading: false,
        error: null
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setResults: (state, action) => {
            state.results = action.payload
            state.loading = false
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setLoading: (state) => {
            state.loading = true
            state.error = null
        },  
        setError: (state, action) => {
            state.error = true
            state.loading = false
        },
        clearResults: (state) => {
            state.results = []
        }
    }
})

export const {setQuery, setResults, setActiveTab, setLoading, setError, clearResults} = searchSlice.actions
export default searchSlice.reducer