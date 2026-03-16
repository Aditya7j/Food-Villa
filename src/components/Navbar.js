import { useState, useEffect } from "react";
import { ResturantCard } from "../components/Card";
import { Audio } from "react-loader-spinner";

const navbarLogo = "https://foodvillabolton.com/inc/img/wholesaler/22790.png";


export const Navbar = ({ list, setList, setLoader, setError }) => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(false);

   
    const handleLogout = () => {
        setUser(false)
    }

    const handleLogin = () => {
        setUser(true);
    }


    const getResturant = async function () {
        try {
            setLoader(true);
            const data = await fetch("https://dummyjson.com/recipes");
            const jsonData = await data?.json();
            setList(jsonData?.recipes);
            setLoader(false);
            setError(false);
        }
        catch (err) {
            setError(err)
        }
    }

    const handleInput = (e) => setSearch(e.target.value);

    const handleClick = () => {
        const filtered = list?.filter((res) =>
            res?.name?.toLowerCase()?.includes(search?.toLowerCase())
        );
        setList(filtered);
        if (filtered.length === 0) {
            setError(true);
        }
    }

    // Reset list when search is cleared
    useEffect(() => {
        if (search === "") {
            setList(list);
        }
        getResturant();
    }, [search, setList]);

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img className="navbar-logo-img" src={navbarLogo} alt="err" />
            </div>
            <div className="search-bar">
                <input
                    className="search-bar-input"
                    type="text"
                    placeholder="Search Food.."
                    value={search}
                    onChange={handleInput}
                />
                <button className="search-btn" onClick={handleClick}>Search</button>
            </div>
            <ul className="nav-ul">
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
                <li>Contact Us</li>
            </ul>

            {user ? <button className="search-btn" onClick={handleLogout}>Logout</button> :
                <button className="search-btn" onClick={handleLogin}>Login</button>}

        </div>
    )
}

export const MainComponent = ({ list, loader, error }) => {

    return (
        <>
            {error && <h1 className="error-text">NO DATA FOUND...</h1>}

            <div className="card-main-wrapper">
                {loader ? <Audio
                    height="55vh"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                /> :
                    <ResturantCard restaurants={list} />}
            </div>
        </>
    )
}