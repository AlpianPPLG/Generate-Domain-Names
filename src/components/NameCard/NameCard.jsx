import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName, isFavorite, toggleFavorite }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(suggestedName).then(() => {
      alert("Domain name copied to clipboard!");
    });
  };

  return (
    <div className="result-name-card">
      <a
        target="_blank"
        rel="noreferrer"
        className="card-link"
        href={`${nameCheapUrl}${suggestedName}`}
      >
        <p className="result-name">{suggestedName}</p>
      </a>
      <button className="copy-button" onClick={copyToClipboard}>
        Copy
      </button>
      <button
        className="favorite-button"
        onClick={() => toggleFavorite(suggestedName)}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default NameCard;
