import axios from "axios";
const token = process.env.TOKEN;
axios.defaults.headers.common["X-Auth-Token"] =
    token || "e72d71ca22bd4ab6842ea4bad1effbd0";
const api = {
    async getStandings(standingType) {
        try {
            const query = standingType ? `?standingType=${standingType}` : "";
            const res = await axios.get(
                `https://api.football-data.org/v2/competitions/2021/standings${query}`
            );
            const { data } = res;
            const { table } = data.standings[0];
            return { table };
        } catch (e) {
            return { error: "Fetch error, try again later" };
        }
    },
    async getTeam(standingType, id) {
        try {
            const res = await this.getStandings(standingType);
            const { table } = res;

            const team = table.filter(standing => id == standing.team.id);
            return { team: team[0] };
        } catch (e) {
            return { error: "Fetch error, try again later" };
        }
    },
    async getDetail(id, router) {
        try {
            const res = await axios.get(
                `https://api.football-data.org/v2/teams/${id}`
            );

            const { data } = res;
            return { ...data };
        } catch (e) {
            return { error: "Fetch error, try again later" };
        }
    }
};

export default api;
