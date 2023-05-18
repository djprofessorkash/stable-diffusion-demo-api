import { useState, useEffect } from "react";
import { Header, Image } from "./components";

const App = () => {
    const [message, setMessage] = useState("");

    const getWelcomeMessage = async() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/api", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            console.log("Bad response.");
        } else {
            setMessage(data.message);
        }
    };

    useEffect(() => {
        getWelcomeMessage();
    }, []);

    return (
        <>
        <div className="columns">
            <div className="column">
                <Header title={message} />
                <Image />
            </div>
        </div>
        </>
    );
}

export default App;