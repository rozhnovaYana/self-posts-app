import React, { useReducer } from "react"
import { AppContext } from "./AppContext"
import {APP_LOAD} from "../types"
import { DATA } from "../data"
import {AppReducer} from "./AppReducer"
export const AppState = ({ children }) => {
    const initial = {
        data: []
    }
    const [state, dispatch] = useReducer(AppReducer, initial)
    const loadData = () => {
        dispatch({
            type: APP_LOAD,
            data:DATA
        })
    }
    return <AppContext.Provider value={{data:state.data, loadData}}>{children}</AppContext.Provider>
}