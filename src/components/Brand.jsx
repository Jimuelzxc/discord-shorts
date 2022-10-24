import { useModal } from "../hooks/useToggle"
const Brand = () => {
    const [state, event] = useModal()
    return (
        <div className="relative">
            <div className={`absolute bg-dark-1 flex flex-col px-3 py-2 gap-3 rounded-lg text-white ml-[30px] mt-8 drop-shadow-lg border border-dark-2 ${state}`}>
                <a href="https://discord.com/app" className="hover:brightness-110 font-semibold">Discord Chat</a>
                <a href="" className="hover:brightness-110 font-semibold">Discord Shorts</a>
            </div>
            <div className="h-full py-[10px] cursor-pointer" onClick={event}>
                <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png" alt="" className="h-full w-auto" />
            </div>
        </div>
    );
}

export default Brand;