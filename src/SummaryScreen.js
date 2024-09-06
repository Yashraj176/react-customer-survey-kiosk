import React from "react";

const SummaryScreen = ({ answers, onSubmit }) => {
  return (
    <div className="summary-screen">
      <h2>Survey Summary</h2>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
      <button className="submit-btn" onClick={onSubmit}>
        Confirm and Submit
      </button>
    </div>
  );
};

export default SummaryScreen;
