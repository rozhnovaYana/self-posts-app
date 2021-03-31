import { DATA } from "../../data"
import { APP_LOAD } from "../../types"

export const postAction = () => {
    return {
        type: APP_LOAD,
        data:DATA
    }
}