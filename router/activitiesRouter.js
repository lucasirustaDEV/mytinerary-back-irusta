import { Router } from "express";
import activitiesController from "../controllers/activitiesController.js";

const activitiesRouter = Router()
const { createActivity, getActivities } = activitiesController

activitiesRouter.get('/', getActivities)
activitiesRouter.post('/', createActivity)

export default activitiesRouter