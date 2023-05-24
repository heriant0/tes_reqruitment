const JobServices = require("../services/jobServices");

const JobController = {
    jobList: async(req, res, next) => { 
        try {
            const dataRequest = req.query;
            const result = await JobServices.getJobList(dataRequest)
            if (result.length > 0) {
                return res.status(200).json({
                    status: 200,
                    message: 'Successfully get data',
                    data: result
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    message: 'Get data failed',
                });         
            }
        } catch (e) {
            next(e);
        }
        
    },

    jobListDetail: async(req, res, next) => {
        try {
            const id = req.params.id
            const result = await JobServices.getJobListDetail(id)
            if (result) {
                return res.status(200).json({
                    status: 200,
                    message: 'Successfully get data',
                    data: result
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    message: 'Get data failed',
                });         
            }
        } catch (e) {
            next(e);
        }
    }
}

module.exports = JobController;