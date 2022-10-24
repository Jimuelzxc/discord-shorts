const ProfilePhoto = ({ className = 'h-[30px] w-[30px]' }) => {
    return (
        <div className={`${className} rounded-full overflow-hidden`}>
            <img src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0" className="h-full w-full object-cover" />
        </div>

    );
}

export default ProfilePhoto;