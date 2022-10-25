const crypto=require("crypto"); 

const verifyEssentialDetail = (req,res)=>{
    const contactNumber=req.contactNumber;
    const email=req.email;


//to generate random otp of 6 digit
const getCorrectOtp=function(){
  let localOTP=parseInt(parseInt(crypto.randomBytes(3).toString("hex"),16),10);
  if(localOTP<100000 || localOTP>999999){
    return getCorrectOtp();
  }
  return localOTP
} 
const OTP=getCorrectOtp();
console.log(OTP)
// otp generation programs end here   


    const generatedOTP=crypto.randomBytes(3, function(err, buffer) {
        console.log(parseInt(buffer.toString('hex'), 16).toString().substr(0, 6));
      });

    const verificationToken=crypto.createHash("sha256")
    .update(verificationToken)
    .digest("hex");

    res.cookies("token",verificationToken,{
        httpOnly:true,
        signed:true,
        maxAge: 60*1000*10
    })
} 

module.exports=verifyEssentialDetail



