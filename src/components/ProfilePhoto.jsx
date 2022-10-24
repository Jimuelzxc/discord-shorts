const ProfilePhoto = ({ className = 'h-[30px] w-[30px]' }) => {
    return (
        <div className="relative">
            <div className="h-[12px] w-[12px] absolute bg-green-500 rounded-full right-0 bottom-0 outline outline-dark-1"></div>
            <div className={`${className} rounded-full overflow-hidden`}>
                <img src="https://pbs.twimg.com/media/FdaYWiiaUAAIfi7?format=jpg&name=4096x4096" className="h-full w-full object-cover" />
            </div>
        </div>


    );
}

export default ProfilePhoto;