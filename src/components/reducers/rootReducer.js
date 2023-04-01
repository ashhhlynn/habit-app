const initialState = {
    habits: [],
    currentUser: [],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
   

case "FETCH_HABITS":
    console.log(action.habits)
    return {
        ...state,
        habits: [...state.habits, action.habits],
        loading: false,
    };

        case "FETCH_HABITS_REQUEST":
            return {
                ...state,
                loading: true
            };
            
       

        default:
            return state;
    }
}

export default rootReducer