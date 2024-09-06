import React, { useEffect } from "react";
import "./ThankYouScreen.css";

const ThankYouScreen = ({ goToWelcomeScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      goToWelcomeScreen(); // Redirect back to WelcomeScreen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [goToWelcomeScreen]);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>We appreciate your time and valuable feedback.</p>
        <p>Returning to the welcome screen shortly...</p>
      </div>
    </div>
  );
};

export default ThankYouScreen;
