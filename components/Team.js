import Link from "next/link";
import api from "../api";

const Team = ({ standing }) => {
    const { team } = standing;
    return (
        <li>
            <Link
                href={`/team/${team.id}`}
                as={`/team/${team.id}`}
                passHref
                prefetch={false}
            >
                <a>
                    <div className="Team-list">
                        <p>{standing.position}</p>
                        <p>{team.name}</p>
                        <p>{standing.playedGames}</p>
                        <p>{standing.won}</p>
                        <p>{standing.draw}</p>
                        <p>{standing.lost}</p>
                        <p>{standing.points}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default Team;
