import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./layouts/main-layout.tsx";
import LoaderHamster from "./pages/loader-hamster.tsx";
import LoaderAstronaut from "./pages/loader-astronaut.tsx";
import Home from "./pages/home.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route path={"/loader_hamster"} element={<LoaderHamster/>}/>
                        <Route path={"/home"} element={<Home/>}/>
                        <Route path={"/loader_astronaut"} element={<LoaderAstronaut/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;