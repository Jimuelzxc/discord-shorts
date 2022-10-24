import VideoNavbar from "./VideoNavbar"
import Wrapper from "./Wrapper"
import 'boxicons'

import { useButton } from "../hooks/useToggle"
import { useVideo } from "../hooks/useVideo"

const Short = ({ className, video }) => {
    const [state, event] = useButton()
    const [toggle, playVideo, vidRef] = useVideo()

    return (
        <div className={`short w-full h-full ${className}`}>
            <div className="video h-[85%] overflow-hidden relative" onClick={event}>
                <div className={`absolute w-full h-full py-5 flex  justify-center items-center bg-dark-highlight ${state ? "visible" : "invisible"}`} >
                    <Wrapper className="flex justify-between items-center">
                        <div className="cursor-pointer">
                            <box-icon name={toggle ? "play" : "pause"} color="#c2c2c2" size="35px" onClick={playVideo}></box-icon>
                        </div>
                    </Wrapper>
                </div>
                <video ref={vidRef} src={video} className="h-full w-full object-cover"></video>
            </div>
            <VideoNavbar />
        </div>
    )
}
export default Short