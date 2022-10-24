import Wrapper from "./Wrapper"
import ProfilePhoto from "./ProfilePhoto"
import Reaction from "./Reaction"
import More from "./More"

import { useHover } from "../hooks/useHover"

const VideoNavbar = () => {
    const [state, hoverTrue, hoverFalse] = useHover()
    return (
        <div className="video-navbar flex-shrink-1 bg-dark-1 hover:brightness-90 relative" onMouseOver={hoverTrue} onMouseOut={hoverFalse}>
            <More hover={state} />
            <Wrapper className="py-4 flex gap-3">
                <div>
                    <ProfilePhoto className="h-[50px] w-[50px]" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <span className="font-semibold text-[1em] text-pink-400">yusinzxc</span>
                        <span className="text-white opacity-25 font-light">08/17/22</span>
                    </div>
                    <p className="text-white">Lorem ipsum dolor sit amet.</p>
                    <div className="flex mt-3 gap-2">
                        <Reaction react="😍" />
                        <Reaction react="😮" />
                        <Reaction react="🔥" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default VideoNavbar;