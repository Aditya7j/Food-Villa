import { useState, useEffect } from "react";
import { ResturantCard } from "../components/Card";
import { Audio } from "react-loader-spinner";
import Error from "./Error";
import { Link, useOutletContext } from "react-router-dom";
import { navbarLogo, API_URL } from "../../constants";
import useInternetTrack from "../../utils/useIntrnetTrack";

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
            const data = await fetch(API_URL);
            const jsonData = await data?.json();
            setList(jsonData?.recipes);
            setLoader(false);
            setError(false);
        }
        catch (err) {
            setError(err);
            setLoader(false);
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
            <Link to="/" className="nav-li">
                <div className="navbar-logo">
                    <img className="navbar-logo-img" src={navbarLogo} alt="Logo" />
                </div>
            </Link>
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
                <Link to="/" className="nav-li">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="nav-li">
                    <li>About Us</li>
                </Link>
                <Link to="/contact" className="nav-li">
                    <li >Contact Us</li>
                </Link>
                <Link to="/instamart" className="nav-li">
                    <li >Instamart</li>
                </Link>
            </ul>

            {user ? <button className="search-btn" onClick={handleLogout}>Logout</button> :
                <button className="search-btn" onClick={handleLogin}>Login</button>}
        </div>
    )
}

export const MainComponent = ({ error }) => {
    const { list, loader } = useOutletContext();
    const tracking = useInternetTrack();

    if (!tracking) {
        return (
            <div className="track-wrapper">
                <h1 className="track-text">Check Your Internet Connection 📡🚫</h1>
            </div>
        )
    }

    return (
        <>
            {error && <Error />}
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