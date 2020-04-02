import Link from "next/link";
import { useRouter } from "next/router";

const Bar = () => {
    const router = useRouter();
    const livescorePage = router.pathname.includes("livescore") ? true : false;
    return (
        <div className="container">
            <div className="Bar">
                <Link href="/">
                    <div className={livescorePage ? "" : "active"}>
                        <img src="../img/rank-bar-button.png" />
                    </div>
                </Link>
                <Link href="/livescore">
                    <div className={!livescorePage ? "" : "active"}>
                        <img src="../img/live-bar-button.png" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Bar;
