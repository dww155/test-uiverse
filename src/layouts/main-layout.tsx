import Header from "../components/header.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
                <Outlet/>
            </div>
        </>
    )
}

export default MainLayout;