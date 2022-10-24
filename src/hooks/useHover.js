import { useState } from "react";
export function useHover() {
    const [state, setState] = useState('invisible')
    function hoverTrue() { setState('visible') }
    function hoverFalse() { setState('invisible') }
    return [state, hoverTrue, hoverFalse]
}