import express from "express";
import { CreateExercise, getData } from "../Controllers/CreateExercise.js";

const router = express.Router();

router.get('/', getData)

router.post('/', CreateExercise)

export default router;