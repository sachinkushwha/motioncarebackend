const {Router}=require('express');
const userController=require('../controller/user');
const userRouter=Router();

userRouter.get('/service',userController.Service);
userRouter.get('/serv',userController.serv);
userRouter.get('/doctor',userController.Doctor);
userRouter.post('/appointment',userController.Appointment);
exports.userRouter=userRouter;