export const createHabit = (habit) => {
    return (dispatch) => {
        console.log(habit)
        dispatch({ type: "CREATE_HABIT", habit })
    }
}

export const patchHabit = (data) => {
    return (dispatch) => {
        dispatch({ type: "PATCH_HABIT", data })
    }
}

export const deleteHabit = (id) => {
    return (dispatch) => {
        const token = localStorage.token;
        return fetch(`http://localhost:3000/habits/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })   
        .then(
            window.alert("Your habit was deleted."),
            dispatch({ type: "DELETE_HABIT", id })
        )
    }
}

export const createUser = (userData) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user: userData
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                localStorage.token = data.jwt;
                dispatch({ type: "SET_CURRENT_USER", user: userData })
            }
        })
    }
}

export const checkUser = () => {
    return (dispatch) => {
        const token = localStorage.token;
        console.log(token)
        return fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                localStorage.removeItem("token")
            }
            else {
                console.log(data.user)
                dispatch({ type: "SET_CURRENT_USER", user: data.user })
                dispatch({ type: "USER_HABITS", habits: data.user.habits })
            }            
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}