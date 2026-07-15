import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import MainLayout from "./layouts/main-layout.tsx";
import LoaderHamster from "./pages/loader-hamster.tsx";
import LoaderAstronaut from "./pages/loader-astronaut.tsx";
import Home from "./pages/home.tsx";
import LoaderSandClock from "./pages/sand-clock.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route path={"/"} element={<Navigate to={"/home"}/>} />
                        <Route path={"/loader_hamster"} element={<LoaderHamster/>}/>
                        <Route path={"/home"} element={<Home/>}/>
                        <Route path={"/loader_astronaut"} element={<LoaderAstronaut/>}/>
                        <Route path={"/sand_timer"} element={<LoaderSandClock/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;