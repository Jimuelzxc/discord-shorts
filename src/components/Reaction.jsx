import { useButton } from "../hooks/useToggle";
import { useState, useEffect } from "react";
const Reaction = ({ react }) => {
    const [state, event] = useButton();
    const [count, setCount] = useState(100 + 1)
    useEffect(() => {
        state ? setCount(count - 1) : setCount(count + 1)
    }, [state])
    return (
        <div
            className={state ? "bg-dark-2 p-1 px-3 rounded-lg hover:outline hover:outline-[0.5px] hover:outline-white cursor-pointer hover:brightness-[120%]" : "bg-primary-2 p-1 px-3 rounded-lg outline outline-[0.5px] outline-primary cursor-pointer"} onClick={event}>
            <span>{react}</span>
            <span className="text-white font-semibold">{count}</span>
        </div>
    );

}
export default Reaction;