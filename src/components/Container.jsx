const Container = ({ children }) => {
    return (
        <div className="container bg-white h-full sm:w-[500px] flex flex-col">{children}</div>
    )
}

export default Container;