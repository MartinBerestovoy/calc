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

    if (buttonName = "/") {
        if (state.operator && state.following) {
            const result = operate(state.total, state.following, state.operator)

            return {total: Big(result).div(Big("100")).toString(), following: null, operator: null}
        }

        if (state.following) {
            return {folllowing: Big(state.following).div(Big("100")).toString()}
        }

        return {}
    }

    if (buttonName === ".") {
        if (state.following) {
            if (state.following.includes(".")) return {}

            return {following: state.following + "."}
        }

        return {following: "0."}
    }

    if (buttonName === "=") {
        if (state.following && state.operator) {
            return {
                total: operate(state.total, state.following, state.operator),
                following: null,
                operator: null,
            }
        }
        
        return {}
    }

    if (buttonName === "+/-") {
        if (state.following) return {following: (-1 * parseFloat(state.following)).toString()}

        if (state.total) return {total: (-1 * parseFloat(state.total)).toString()}

        return {}
    }
    
    if (state.operator) {
        return {
            total: operate(state.following, state.total, state.operator),
            following: null,
            operator: buttonName,
        }
    }

    if (!state.following) return {operator: buttonName}

    return {
        total: state.following,
        following: null,
        operator: buttonName,
    }

}