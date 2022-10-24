import Short from "./Short";
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
const Content = () => {
    return (
        <div className="parent bg-slate-400 ">
            <Short className="bg-green-300" video={vid2} />
            <Short className="bg-green-300" video={vid1} />
        </div>
    );
}
export default Content;