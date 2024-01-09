import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Contact = () => {
  return (
    <div>
      <div className="contact-icon">
        <LinkedInIcon className="icon2" />
        <GitHubIcon className="icon2" />
      </div>
      <div className="footer-detail">
        <div className="footer1">
          <h3>
            <DiamondRoundedIcon /> E-BUY
          </h3>
          <p>
            Our website allows people to buy products over the internet rather
            than at a brick-and-mortar location.
          </p>
        </div>
        <div className="footer2">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="/"> Pricing</a>
            </li>
            <li>
              <a href="/">Setting</a>
            </li>
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer3">
          <h3>CONTACT</h3>
          <p>
            <HomeIcon /> Bangalore
          </p>
          <p>
            <MailIcon />
            mdmustapa421@gmail.com
          </p>
          <p>
            <LocalPhoneIcon /> 8122622451
          </p>
        </div>
      </div>
      <div className="copywrite">&copy;2024 Copyright:E-Buy</div>
    </div>
  );
};

export default Contact;
