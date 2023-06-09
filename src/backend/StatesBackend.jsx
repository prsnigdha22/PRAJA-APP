import axios from "axios";
import { useEffect } from 'react';

const STATE_API = "http://localhost:9191/api/v1";

class StateChart {

    getStateInfoByName(name) {
        console.log("hello" + name)
        return axios.get(STATE_API + '/state/' + name);

    }
    
}
export default new StateChart();