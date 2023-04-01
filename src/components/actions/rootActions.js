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
         {dispatch({ type: "CREATE_HABIT", habit })}
        
    }
}

export const editHabit = () => {
    return (dispatch) => {
        dispatch({ type: "EDIT_HABIT" })
    }
}

export const deleteHabit = () => {
    return (dispatch) => {
        dispatch({ type: "DELETE_HABIT" })
    }
}