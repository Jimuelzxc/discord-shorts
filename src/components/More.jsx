import Icon from "./Icon"


const More = ({ hover }) => {
    return (
        <div className={`px-4 py-[3px] rounded-md drop-shadow-lg  bg-dark-1 border border-dark-2 absolute right-0 translate-y-[-25px] mr-3 flex items-center gap-3 ${hover}` }>
            <Icon name="smile" type="solid" size="20px" text="Add Reaction" animation="tada"/>
            <Icon name="message-alt-dots" type="solid" size="20px" text="Comments"/>
            <Icon name="share" type="solid" size="20px" text="Share"/>
            <Icon name="dots-horizontal-rounded" type="solid" size="30px" text="More"/>
        </div>
    );
}

export default More;