import Big from "big.js"
import IsNumber from "./IsNumber"

export default function Operations (state, buttonName) {
    if (buttonName === "AC"){
        return{
            total: null,
            following: null,
            operator: null,
        }
    }

    if (IsNumber(buttonName)) {
        if (buttonName === "0" && state.following === "0") return {}

        if (state.operator) {
            if (state.following) return {following: state.following + buttonName}

            return {following: buttonName}
        }

        if (state.following) {
            const following = state.following === "0" ? buttonName: state.following + buttonName
    
            return {following, total: null}
        }

        return {following: buttonName, total: null}
    }

    

}