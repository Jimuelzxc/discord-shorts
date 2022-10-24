const Wrapper = ({ children, className }) => {
    return (
        <div className={`wrapper h-full px-4 ${className}`}>
            {children}
        </div>
    );
}

export default Wrapper;