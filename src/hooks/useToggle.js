import { useState } from "react";
export function useModal() {
    const [state, setState] = useState('invisible')
    function event() {
        setState('visible')
        if (state == 'visible') setState('invisible')
    }
    return [state, event]
}
export function useButton() {
    const [state, setState] = useState(true)
    function event() {
        setState(true)
        if (state) setState(false)
        console.log(state)
    }
    return [state, event]

}