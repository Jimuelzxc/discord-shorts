import Wrapper from "./Wrapper";
import Brand from "./Brand";
import Icon from "./Icon";
import ProfilePhoto from "./ProfilePhoto";

const Navbar = () => {
    return (
        <div className="h-[60px] bg-dark-1 border-b-[1px] drop-shadow-lg border-dark-2 z-40">
            <Wrapper className="flex justify-between">
                <Brand />
                <div className="flex items-center gap-4">
                    <Icon name="search" type="regular" text="Search"/>
                    <Icon name="user" type="solid" text="Following"/>
                    <ProfilePhoto />
                </div>
            </Wrapper>
        </div>
    );
}
export default Navbar;