const axios = require('axios');
const BASE_URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'

const JobServices = {
    getJobList: async(dataRequest) => {
        try {
            let description = (dataRequest.description) ? dataRequest.description : '';
            let location = (dataRequest.location) ? dataRequest.location : '';
            let full_time = (dataRequest.full_time == 'Y') ? true : false;
            let page = (Number(dataRequest.page) > 0) ? Number(dataRequest.page) : 0;
            let url;
            if (page > 0) {
                url = (`${BASE_URL}?description=${description}&location=${location}&full_time=${full_time}&page=${page}`);
            } else {
                url = (`${BASE_URL}?description=${description}&location=${location}&full_time=${full_time}`);
            }

            const { data } = await axios.get(url);
            return data;
        } catch (e) {
            
        }
    },

    getJobListDetail: async(id) => {
        try {
            const url =`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
            const { data } = await axios.get(url);
            return data;
        } catch (e) {
            throw new Error(e)
        }
    },
}

module.exports = JobServices;