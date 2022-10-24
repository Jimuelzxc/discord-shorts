import { useModal } from "../hooks/useToggle"
const Brand = () => {
    const [state, event] = useModal()
    return (
        <div className="relative">
            <div className="h-[18px] w-[18px] absolute bg-red-500 rounded-full mt-8 ml-6 outline outline-dark-1 flex justify-center items-center">
                <span className="text-[#ffffff] text-[0.8em]">1</span>
            </div>

            <div className={`absolute bg-dark-1 flex flex-col px-3 py-2 gap-3 rounded-lg text-white ml-[30px] mt-8 drop-shadow-lg border border-dark-2 ${state}`}>
                <a href="https://discord.com/app" className="hover:brightness-110 font-semibold relative">Discord Chat <div className="h-[10px] w-[10px] bg-red-500 rounded-full right-0 absolute translate-y-[-15px] translate-x-1"></div></a>
                <a href="" className="hover:brightness-110 font-semibold">Discord Shorts</a>
            </div>
            <div className="h-full py-[10px] cursor-pointer" onClick={event}>
                <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png" alt="" className="h-full w-auto" />
            </div>
        </div>
    );
}

export default Brand;