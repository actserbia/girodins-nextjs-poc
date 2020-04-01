import { useState } from "react";
import api from "../../api";
import TeamInfo from "../../components/TeamInfo";
import Router from "next/router";
import TeamStats from "../../components/TeamStats";

const Team = ({ home, id, detail }) => {
    const initialStanding = {
        detail,
        home,
        away: {
            team: {
                playedGames: "",
                won: "",
                lost: "",
                draw: "",
                goalsAgainst: "",
                goalsFor: "",
                goalDifference: "",
                points: ""
            },
            error: false
        },
        fetched: false
    };

    const [type, setType] = useState("home");
    const [standing, setStanding] = useState(initialStanding);

    let team = standing[type].team || { error: "Fetch error, try again later" };

    const handleButton = () => {
        let newType = type == "home" ? "away" : "home";
        if (!standing.fetched) {
            getAway();
        }
        setType(newType);
    };
    const handleBackButton = () => {
        Router.back();
    };

    const getAway = async () => {
        const fetched_away = await api.getTeam("AWAY", id);

        setStanding({ ...standing, away: fetched_away, fetched: true });
    };
    return (
        <div className="Team-detail">
            <div onClick={handleBackButton} className="back">
                {"< Back"}
            </div>
            {detail.error ? (
                <h6 className="error">{detail.error} </h6>
            ) : (
                <TeamInfo detail={detail} />
            )}
            <div className="toggle-button-cover">
                <div>
                    <div className="button r" id="button-9">
                        <input
                            type="checkbox"
                            className="checkbox"
                            onClick={handleButton}
                        />
                        <div className="knobs">
                            <span></span>
                        </div>
                        <div className="layer"></div>
                    </div>
                </div>
            </div>
            {team.error ? (
                <h6 className="error">{team.error} </h6>
            ) : (
                <TeamStats team={team} />
            )}
        </div>
    );
};
Team.getInitialProps = async ({ query }) => {
    const id = query.id;

    const home = await api.getTeam("HOME", id);
    const detail = await api.getDetail(id);
    return { home, id, detail };
};

export default Team;
