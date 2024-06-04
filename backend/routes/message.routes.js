import express from "express"
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js"
import { getMessages } from "../controllers/message.controller.js";


const router = express.Router()
//:id creates param id to be grabbed by the controller
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)


export default router;