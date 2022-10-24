import { useState,useRef } from "react";
export function useVideo() {
    const vidRef = useRef(null)
    const [toggle, setVideo] = useState(true)
    function playVideo() {
        if (toggle) {
            vidRef.current.play()
            setVideo(false)
        } else {
            vidRef.current.pause()
            setVideo(true)
        }
    }
    return [toggle, playVideo, vidRef]

}