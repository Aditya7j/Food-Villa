import { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { MainComponent, Navbar } from "./src/components/Navbar";
import { Footer } from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import CardDetails from "./src/components/CardDetails";
import { Audio } from "react-loader-spinner";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const Instamart = lazy(() => import("./src/components/Instamart"));


const AppLayout = () => {
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');


    return (
        <>
            <Navbar list={list} setList={setList} setLoader={setLoader} setError={setError} />
            <Outlet context={{ list, loader, error }} />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <MainComponent />
            },
            {
                path: "/about",
                element: <Suspense fallback={
                    <div className="audio-wrapper">
                        <Audio
                            height="55vh"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="audio-loading"
                            wrapperStyle={{}}
                            wrapperClass="wrapper-class"
                            visible={true}
                        />
                    </div>}>
                    <About />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={
                    <div className="audio-wrapper">
                        <Audio
                            height="55vh"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="audio-loading"
                            wrapperStyle={{}}
                            wrapperClass="wrapper-class"
                            visible={true}
                        />
                    </div>}><Contact /></Suspense>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={
                    <div className="audio-wrapper">
                        <Audio
                            height="55vh"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="audio-loading"
                            wrapperStyle={{}}
                            wrapperClass="wrapper-class"
                            visible={true}
                        />
                    </div>}><Instamart /></Suspense>
            },
            {
                path: "/resturant/recipes/:id",
                element: <CardDetails />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);