import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MainComponent, Navbar } from "./src/components/Navbar";
import { Footer } from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import CardDetails from "./src/components/CardDetails";

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
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
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