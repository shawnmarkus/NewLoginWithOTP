const crypto = require("crypto");
const sendEmail = require("./sendEmail");

const verifyEssentialDetail = async (req, res) => {
  // const contactNumber = req.contactNumber;
  const email = req.body.email;
  console.log("email address received on req===>" + req.body.email);

  //to generate random otp of 6 digit - recurcive method
  const getCorrectOtp = function () {
    let localOTP = parseInt(
      parseInt(crypto.randomBytes(3).toString("hex"), 16),
      10
    );
    if (localOTP < 100000 || localOTP > 999999) {
      return getCorrectOtp();
    }
    return localOTP;
  };
  const OTP = getCorrectOtp();
  // console.log(OTP);

  const message = `
    <h2> you have requested OTP that is ${OTP}  </h2>
    <p>please go through that link to reset your password</p>
    `;

  console.log("abhi upar hu sending process ke");

  try {
    await sendEmail({
      to: email,
      subject: " Requested OTP ",
      text: message,
    });

    console.log("data is send and the retured value is ");
    // setting the cookies after the
    const verificationToken = crypto
      .createHash("sha256")
      .update(OTP.toString())
      .digest("hex");

    res
      .cookie("token", verificationToken, {
        httpOnly: true,
        maxAge: 60 * 1000 * 10,
      })
      .json({
        msg: "OTP sent",
      });
    console.log("abhi neeche hu sending process ke");
  } catch (error) {
    res.status(404).json({
      msg: "FAILED_TO_MAIL",
    });
  }

  // otp generation programs end here

  // OTP generation approach by elimanation extra digits from last
  // const generatedOTP=crypto.randomBytes(3, function(err, buffer) {
  //     console.log(parseInt(buffer.toString('hex'), 16).toString().substr(0, 6));
  //   });
};

// async function tt(req, res) {
//   console.log("mc\n");
// }

const verifyOTP = async (req, res) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  const OTP_RCVD = req.body.OTP;

  function setVerified(req, res) {
    req.userState = "verified";
    res.json({
      msg: "email " + req.userState,
    });
  }

  if (token) {
    const verify_token = crypto
      .createHash("sha256")
      .update(OTP_RCVD.toString())
      .digest("hex");

    verify_token === token
      ? setVerified(req, res)
      : res.json({
          msg: " wrong OTP provided",
        });
  } else {
    res.json({
      msg: "TIME_OUT",
      msg2: req.cookies,
    });
  }
};

// module.exports = { verifyEssentialDetail, verifyOTP };
module.exports = { verifyEssentialDetail, verifyOTP };
