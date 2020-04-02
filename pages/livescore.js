import { useState, useEffect } from "react";

const W3CWebSocket = require("websocket").w3cwebsocket;

const Livescore = () => {
    const [livescore, setLivescore] = useState({
        matches: []
    });

    useEffect(() => {
        const socket = new W3CWebSocket("ws://vasilie.net:42069/", "");

        socket.onerror = function() {
            console.log("Connection Error");
        };
        socket.onclose = function() {
            console.log("girodins-livescore socket Closed");
        };
        socket.onmessage = function(e) {
            if (typeof e.data === "string") {
                console.log("Received: '" + e.data + "'");
                setLivescore(JSON.parse(e.data));
            }
        };

        return function cleanup() {
            socket.close();
        };
    }, []);

    return (
        <div className="Livescore-container">
            <img
                className="background-image"
                src="../img/heroImage@2x.jpg"
                alt="background"
            />
            <h2>Live score</h2>
            {livescore.matches.map((match, index) => (
                <div>
                    <div className="Livescore">
                        <img
                            className={index === 1 ? "arsenal" : ""}
                            src={match.home.img}
                        />
                        <div className="Livescore-match">
                            <p>
                                {match.home.score} : {match.away.score}
                            </p>
                        </div>
                        <img src={match.away.img} />
                    </div>
                    <h5>Minute '{match.minute}</h5>
                </div>
            ))}
        </div>
    );
};

export default Livescore;
