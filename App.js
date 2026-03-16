import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MainComponent, Navbar } from "./src/components/Navbar";
import { Footer } from "./src/components/Footer";

const AppLayout = () => {
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    return (
        <>
            <Navbar list={list} setList={setList} setLoader={setLoader} setError={setError} />
            <MainComponent list={list} loader={loader} error={error} />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);