import { Router } from "express";
import {registerUer} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUer);

export default router