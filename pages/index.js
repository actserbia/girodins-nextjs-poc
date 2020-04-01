import { useState, useEffect } from "react";
import Team from "../components/Team";
import Error from "next/error";
import api from "../api";
import localStorageState from "../hooks/useLocalStorageState";
import useLocalStorageState from "../hooks/useLocalStorageState";

const Home = ({ table, error }) => {
    return (
        <div>
            <img
                className="background-image"
                src="../img/heroImage@2x.jpg"
                alt="background"
            />
            <div className="Team">
                <ul>
                    <li>
                        <div className="Team-list heading">
                            <p>#</p>
                            <p>Club</p>
                            <p>Pg</p>
                            <p>Wg</p>
                            <p>Dg</p>
                            <p>Lg</p>
                            <p>P</p>
                        </div>
                    </li>
                    {error && <h6 className="error">{error}</h6>}
                    {table.map(standing => (
                        <Team standing={standing} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

Home.getInitialProps = async ({ query }) => {
    return await api.getStandings();
};
Home.defaultProps = {
    table: [
        {
            position: "",
            playedGames: "",
            won: "",
            draw: "",
            lost: "",
            points: "",
            team: {
                name: ""
            }
        }
    ],
    error: ""
};
export default Home;
