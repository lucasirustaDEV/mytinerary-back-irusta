import Activity from "../models/Activity.js";

const activitiesController = {
    createActivity: async (req, res, next) => {
        let newActivity;
        let success = true
        try {
            newActivity = await Activity.create(req.body)
            res.json({
                response: newActivity,
                success,
            })  
        } catch (err) {
            success: false
            next(err)
        }          
    },

    getActivities: async (req, res, next) => {
        let { title } = req.query
        let query = {}
        if (title) {
            query.title = { $regex: `^${title}`, $options: 'i' }
        }
        let allActivities
        let success = true
        try {
            allActivities = await Activity.find(query).sort({ title: 1 })    
            res.json({
                response: allActivities,
                success,
            });
        } catch (err) {
            success; false
            next(err)
        }
    },
}

export default activitiesController