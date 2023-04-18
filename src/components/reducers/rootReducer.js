const initialState = {
    habits: [],
    currentUser: [],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {    
        case "CREATE_HABIT":
            console.log(action.habit)
            return {
                ...state,
                habits: [...state.habits, action.habit],
                loading: false
            };
        case "PATCH_HABIT":
            return {
                ...state,
                loading: false,
                habits: [...state.habits.filter(item=> item.id !== action.data.id), action.data],          
            };  
        case "DELETE_HABIT":
            return {
                ...state,
                loading: false,
                habits: state.habits.filter(item=> item.id !== action.id),
            };
        case 'SET_CURRENT_USER':
            console.log(action.user)
            return {
                ...state, 
                currentUser: action.user, 
                loading: false
            };
        case 'USER_HABITS':
            console.log(action.habits)
            return {
                ...state, 
                habits: action.habits,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...state, 
                currentUser: [], 
                loading: false  
            };
        default:
            return state;
    }
}

export default rootReducer