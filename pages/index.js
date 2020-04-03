import Team from "../components/Team";
import api from "../api";

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
                    {table.map((standing, index) => (
                        <Team key={`team-${index}`} standing={standing} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export async function getServerSideProps({ query }) {
    return { props: await api.getStandings() };
}

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
