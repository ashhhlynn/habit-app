export const fetchHabits = () => {
    return (dispatch) => {
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" })
        fetch("http://localhost:3000/habits")
            .then(response => response.json())
            .then(habits => {dispatch({ type: "FETCH_HABITS", habits })
        })
    }
}

export const createHabit = (habit) => {
    return (dispatch) => {
        console.log(habit)
        dispatch({ type: "CREATE_HABIT", habit })
    }
}

export const editHabit = (data) => {
    return (dispatch) => {
        dispatch({ type: "EDIT_HABIT", data })
    }
}

export const patchHabit = (data) => {
    return (dispatch) => {
        dispatch({ type: "PATCH_HABIT", data })
    }
}

export const deleteHabit = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_HABIT", id })
    }
}

export const getExistingUser = (userData) => {
    return (dispatch) => {
        dispatch({ type: "SET_CURRENT_USER", user: userData })
    }
}

export const createUser = (userData) => {
    return (dispatch) => {
        dispatch({ type: "SET_CURRENT_USER", user: userData })
    }
}

export const checkUser = (userData) => {
    return (dispatch) => {
        dispatch({ type: "SET_CURRENT_USER", user: userData })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}