import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "A.K Singh",
        email: "ak007@gmail.com",
    }
})

export default UserContext;

