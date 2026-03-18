import { useContext } from "react";
import UserContext from "../../utils/userContext";

export const Footer = () => {


    const {user} = useContext(UserContext);


    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2026 FoodVilla. All rights reserved to {user.name}</p>
                <ul className="footer-links">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </footer>
    );
};
