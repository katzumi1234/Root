import Navbar from "../../Components/Navbar/Navbar";

const Main = ({children}) => {
    return (
        <>
        <Navbar />
        <div className="text-white content mt-5">
            {children}
        </div>
        </>
    )
}

export default Main;