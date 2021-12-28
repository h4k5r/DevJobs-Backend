import {Router} from "express";
import {
    Login,
    ResetPassword,
    ResetToken,
    SignUp,
    VerifyEmployer,
} from '../../Controllers/AuthControllers/EmployerAuthController';

const router = Router();

//create employer
router.post('/signup', SignUp);

//login employer
router.post('/login', Login);

//reset password
router.post('/reset-password', ResetPassword);

//reset password with dynamic token
router.post('/reset-password/:token', ResetToken);

//verify with dynamic token
router.post('/verify/:token', VerifyEmployer);

export default router;