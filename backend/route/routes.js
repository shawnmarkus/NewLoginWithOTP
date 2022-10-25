const routePath = require("express").Router();

//importing all middleware
const {createRegisterSchema, confirmPswd, loginDataValidation}=require("../utilityAndMiddleWare/validateSchema");
const {registerAdminUsr,encryptPswd,loginUser}=require("../auth/authenticate");
const {varifyEssentailDetail}=require("../utilityAndMiddleWare/varifyEssentailDetail")
// const { verify } = require("jsonwebtoken");

//reset password
routePath.route("/resetpswd").put(resetPassword);

//verify mobile number and email
routePath.route("/verify").get(varifyEssentailDetail);

//admin signUp or register 
routePath.route("/signUpAdmin").post(createRegisterSchema, confirmPswd, encryptPswd, registerAdminUsr);

//admin signin
routePath.route("/signInAdmin").get(loginDataValidation, loginUser);

//student signUp or register 
routePath.route("/signUpStudent").post(createRegisterSchema, confirmPswd, encryptPswd, registerStudentUsr);

//student signIn
routePath.route("/signInStudent").get(createRegisterSchema, confirmPswd, encryptPswd, registerAdminUsr);

//forgot password
routePath.route("/forgotpswd").post(forgotPassword);

//export module
module.exports=routePath;