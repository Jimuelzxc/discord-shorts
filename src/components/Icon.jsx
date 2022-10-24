import 'boxicons'
import { useHover } from '../hooks/useHover';
const Icon = ({ name, type, size, animation, text, color = "#c2c2c2" }) => {
    const [state, hoverTrue, hoverFalse] = useHover()
    return (
        <div className=''>
            <div className={`absolute bg-dark-2 rounded-lg translate-y-[40px] translate-x-[-15px] px-3 py-2 ${state} z-10 `}>
                <p className='text-white'>{text}</p>
            </div>
            <a href="" className='flex items-center hover:brightness-200' onMouseOver={hoverTrue} onMouseOut={hoverFalse} >
                <box-icon name={name} type={type} color={color} size={size} animation={animation}></box-icon>
            </a>
        </div>
    );
}

export default Icon;