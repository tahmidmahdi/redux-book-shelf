import axios from "axios"

export const loadBooks = () => {
    return (dispatch) => {
        fetch(`http://localhost:8080/books`)
        .then(res=> res.json())
        .then(data=> {
            dispatch({
                type: 'LOAD_BOOKS',
                payload: data.data
            })
        })
    }

}

export const addToReadingList = (payload) => {
    return async (dispatch) => {
        await axios.post('http://localhost:8080/add-to-reading-list', payload)

        dispatch({
            type: 'ADD_TO_READING_LIST',
            payload
        })
    }
}

export const removeFromReadingList = (payload) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}



