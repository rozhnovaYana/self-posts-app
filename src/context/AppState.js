import React, { useReducer } from "react"
import { AppContext } from "./AppContext"
import {APP_LOAD, TOGGLE_BOOKED} from "../types"
import { DATA } from "../data"
import {AppReducer} from "./AppReducer"
export const AppState = ({ children }) => {
    const initial = {
        data: [],
        booked:[]
    }
    const [state, dispatch] = useReducer(AppReducer, initial)
    const loadData = () => {
        dispatch({
            type: APP_LOAD,
            data:DATA
        })
    }
    const toggleBooked = (id) => {
        dispatch({
            type: TOGGLE_BOOKED,
            id
        })
    }
    return <AppContext.Provider value={{data:state.data, loadData, toggleBooked, booked:state.booked}}>{children}</AppContext.Provider>
}