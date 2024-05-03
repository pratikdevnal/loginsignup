import React from "react";

import facebook from "../assests/facebook.png";
import google from "../assests/google.png";
const SocailLogin = () => {
  return (
    <>
      <div className="or-container">
        <div>
          <hr />
        </div>
        <div>
          <p className="or">Or</p>
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div className="facebook">
        <img src={facebook} alt="facebook icon" />
        <h3>Login with Facebook</h3>
      </div>

      <div className="google">
        <img src={google} alt="facebook icon" />
        <h3>Login with Google</h3>
      </div>
    </>
  );
};

export default SocailLogin;
