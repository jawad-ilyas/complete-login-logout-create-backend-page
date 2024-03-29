import { Router } from "express";
import { loginUser, logout, registerUser } from "../contollers/User.contollers.js"
import { upload } from "../middlerwares/multer.middlerwares.js"
import { verifyJwt } from "../middlerwares/auth.middlewavers.js";
const router = Router();



// ! Routes For the Register User
router.route("/register").post(upload.fields(
    [
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 3 }
    ]
), registerUser)


// ! Routes For the Login User
router.route("/login").post(loginUser)

// ! Routes For the Log out 
router.route("/logout").post( verifyJwt,logout)

export default router;