const TeamStats = ({ team }) => {
    return (
        <ul className="Team-stats">
            <li>
                <div>
                    <h5>Played Games</h5>
                    <p>{team.playedGames}</p>
                </div>
                <div>
                    <h5>Won Games</h5>
                    <p>{team.won}</p>
                </div>
                <div>
                    <h5>Draw Games</h5>
                    <p>{team.draw}</p>
                </div>
                <div>
                    <h5>Lost Games</h5>
                    <p>{team.lost}</p>
                </div>
                <div>
                    <h5>Goals For</h5>
                    <p>{team.goalsFor}</p>
                </div>
                <div>
                    <h5>Goals Against</h5>
                    <p>{team.goalsAgainst}</p>
                </div>
                <div>
                    <h5>Goal Difference</h5>
                    <p>{team.goalDifference}</p>
                </div>
                <div>
                    <h5>Points</h5>
                    <p>{team.points}</p>
                </div>
            </li>
        </ul>
    );
};
TeamStats.defaultProps = {
    standing: {
        home: {
            team: {
                playedGames: "",
                won: "",
                lost: "",
                draw: "",
                goalsAgainst: "",
                goalsFor: "",
                goalDifference: "",
                points: ""
            }
        },
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
            }
        }
    }
};
export default TeamStats;
