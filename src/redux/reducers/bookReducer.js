
const initialState = {
  readingList: [],
  discoverList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_BOOKS": {
      const newState = {
        ...state,
        discoverList: action.payload
      };
      return newState;
  }
    case "ADD_TO_READING_LIST": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {
        ...state,
        readingList: state.readingList.filter((b) => b.id !== action.payload),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
