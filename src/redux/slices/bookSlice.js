import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loadBookAsync = createAsyncThunk(
    'books/loadBooks',
    async () => {
        const res = await fetch('https://redux-book-shelf.herokuapp.com/books')
        const data = await res.json();

        return data.data;
    }
);

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        readingList: [],
        discoverList: [],
        finishedList: [],
    },
    reducers: {
        // loadBooks: (state, {payload}) => {
        //     state.discoverList = payload
        // },
        addReadingList: (state, {payload}) => {
            state.readingList.push(payload) 
        },
        removeFromReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter((r) => r.id !== payload)
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(loadBookAsync.fulfilled, (state, {payload}) => {
            state.discoverList = payload;
          })
      },
})

export const { 
    // loadBooks, 
    addReadingList,
    removeFromReadingList 
} = bookSlice.actions;

// export const getBooks = (payload) => (dispatch) => {
//     fetch('https://redux-book-shelf.herokuapp.com/books')
//     .then(res=> res.json())
//     .then(({data}) =>  dispatch(loadBooks(data)))
// }
export default bookSlice.reducer
