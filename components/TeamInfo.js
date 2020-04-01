const TeamInfo = ({ detail }) => {
    return (
        <div className="Team-info">
            <img src={detail.crestUrl} />
            <ul>
                <li>
                    <img src="/img/1.png" />
                    <p>{detail.address}</p>
                </li>
                <li>
                    <img src="/img/2.png" />
                    <p>{detail.venue}</p>
                </li>
                <li>
                    <img src="/img/3.png" />
                    <p>{detail.website}</p>
                </li>
                <li>
                    <img src="/img/4.png" />
                    <p>{detail.email}</p>
                </li>
                <li>
                    <img src="/img/5.png" />
                    <p>{detail.founded}</p>
                </li>
            </ul>
        </div>
    );
};
TeamInfo.defaultProps = {
    detail: {
        crestUrl: "",
        address: "",
        venue: "",
        website: "",
        email: "",
        founded: ""
    }
};

export default TeamInfo;
