const routePath = require("express").Router();

//importing all middleware
// const {
//   createRegisterSchema,
//   confirmPswd,
//   loginDataValidation,
// } = require("../utilityAndMiddleWare/validateSchema");

// const {
//   registerAdminUsr,
//   encryptPswd,
//   loginUser,
//   resetPassword,
//   registerStudentUsr,
//   forgotPassword,
//   logoutUsr,
// } = require("../auth/authenticate");

// test purpose
// console.log("hi bsdk");
// test end

const {
  verifyOTP,
  verifyEssentialDetail,
  // tt,
} = require("../utilityAndMiddleWare/varifyEssentails");

// const { verify } = require("jsonwebtoken");

//reset password
// routePath.route("/resetpswd").put(resetPassword);

// send otp via email
routePath.route("/sendOTP").get(verifyEssentialDetail);

//verify mobile number and email
routePath.route("/verifyOTP").get(verifyOTP);

// //admin signUp or register
// routePath
//   .route("/signUpAdmin")
//   .post(createRegisterSchema, confirmPswd, encryptPswd, registerAdminUsr);

// //admin signin
// routePath.route("/signInAdmin").get(loginDataValidation, loginUser);

// //student signUp or register
// routePath
//   .route("/signUpStudent")
//   .post(createRegisterSchema, confirmPswd, encryptPswd, registerStudentUsr);

// //student signIn
// routePath
//   .route("/signInStudent")
//   .get(createRegisterSchema, confirmPswd, encryptPswd, registerAdminUsr);

// // logout
// routePath.route("/logout").get(logoutUsr);

// //forgot password
// routePath.route("/forgotpswd").post(forgotPassword);

//export module
module.exports = routePath;
