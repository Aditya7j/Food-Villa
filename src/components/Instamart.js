import { useState } from "react"

const Section = ({ title, desc, isVisible, onToggle }) => {
    return (
        <div className="section-wrapper">
            <h1>{title}</h1>
            <button onClick={onToggle}>{isVisible ? "Hide" : "Show"}</button>

            <div className={`section-content ${isVisible ? "show" : ""}`}>
                <h3>{desc}</h3>
            </div>
        </div>
    );
};

const Instamart = () => {

    const [activeSession, setActiveSession] = useState("about");

    return (
        <div>
            <Section title={"About Instamart"}
                desc={"Instamart is a fast and reliable online grocery delivery platform designed to make everyday shopping effortless. Built for speed and convenience, Instamart ensures that essential items—from fresh fruits and vegetables to daily household needs—reach your doorstep in minutes."
                }
                isVisible={activeSession === "about"}
                onToggle={() => setActiveSession(activeSession === "about" ? null : "about")}
            />
            <Section title={"Career Instamart"}
                desc={"Instamart is a fast and reliable online grocery delivery platform designed to make everyday shopping effortless. Built for speed and convenience, Instamart ensures that essential items—from fresh fruits and vegetables to daily household needs—reach your doorstep in minutes."
                }
                isVisible={activeSession === "career"}
                onToggle={() => setActiveSession(activeSession === "career" ? null : "career")}

            />
            <Section title={"Team Instamart"}
                desc={"Instamart is a fast and reliable online grocery delivery platform designed to make everyday shopping effortless. Built for speed and convenience, Instamart ensures that essential items—from fresh fruits and vegetables to daily household needs—reach your doorstep in minutes."
                }
                isVisible={activeSession === "Team"}
                onToggle={() => setActiveSession(activeSession === "Team" ? null : "Team")}

            />
        </div>
    )
}

export default Instamart;