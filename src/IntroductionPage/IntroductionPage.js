import jwt from 'jsonwebtoken';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import logo from "../assets/images/video-chat-icon.svg";
import { setIsRoomHost } from "../store/actions";
import ConnectingButtons from "./ConnectingButtons";


import GoogleAuthIcon from "./GoogleAuthIcon";
import "./IntroductionPage.css";
import LogoutButton from "./LogoutButton";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  const [googleId, setGoogleId] = useState("");
  const [name, setName] = useState("");
  const jwtToken = localStorage.getItem("jwt");

  useEffect(() => {
    setIsRoomHostAction(false);
    // Проверка на jwt 
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get("jwt");

    if (jwtToken) {
      localStorage.setItem("jwt", jwtToken);
      // window.location = "https://connectify.website/";
      window.location="http://localhost:3000"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwt.decode(jwtToken);
      {console.log(decodedToken);}
      if (decodedToken) {
        // setGoogleId(decodedToken.user.googleId);
        setName(decodedToken.user.username);
      }
    }
  }, [jwtToken]);

  const renderButton = () => {
    if (jwtToken) {
      return <LogoutButton />;
    } else {
      return <GoogleAuthIcon />;
    }
  };

  return (
    <div className="introduction_page_container">
      {jwtToken && (
        <div className="profile_data">
          <h2>Name: {name}</h2>
        </div>
      )}
      {renderButton()}
        <img src={logo} className="introduction_page_image" alt="Logo" />
      <div class="name">
  <h1>Lightning Link<span>Instant Login-free Video Meetings</span></h1>
</div>
     
     
      <div className="introduction_page_panel">
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
