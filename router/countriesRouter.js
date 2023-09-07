import { Router } from "express";
import countriesController from "../controllers/countriesController.js";

const countriesRouter = Router()
const { createCountry, getAllCountries } = countriesController

countriesRouter.get('/', getAllCountries)
countriesRouter.post('/', createCountry)

export default countriesRouter