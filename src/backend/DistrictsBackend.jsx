import axios from "axios";

const DISTRICT_API = "http://localhost:9191/api/v1";

class DistrictChart {

    getInfoByDistrictName(name) {
        return axios.get(DISTRICT_API + '/district/' + name);

    }
    getAssemblyInfoByDistrictName(districtName) {

        return axios.get(DISTRICT_API + '/district/' + districtName + '/assemblyList');
    }
    getParliamentInfoByDistrictName(districtName) {
        return axios.get(DISTRICT_API + '/district/' + districtName + '/parliamentList');

    }

}
export default new DistrictChart();