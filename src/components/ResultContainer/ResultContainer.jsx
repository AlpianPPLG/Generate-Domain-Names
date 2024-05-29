import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({ suggestedNames }) => {
  const suggestedNamesJsx =
    suggestedNames.length > 0 ? (
      <>
        <p className="results-title">Your Domain Name Recommendation:</p>
        {suggestedNames.map((suggestedName) => {
          return <NameCard key={suggestedName} suggestedName={suggestedName} />;
        })}
      </>
    ) : (
      <p className="results-title">Your Domain Name Recommendation:</p>
    );

  return <div className="results-container">{suggestedNamesJsx}</div>;
};
export default ResultContainer;
