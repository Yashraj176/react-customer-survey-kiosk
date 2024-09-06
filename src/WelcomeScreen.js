import React from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = ({ startSurvey }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Our Survey</h1>
        <p>We value your feedback and would love to hear your thoughts!</p>
        <button className="start-button" onClick={startSurvey}>
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
