import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {
  // Fungsi untuk menyalin nama domain ke clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(suggestedName).then(() => {
      alert("Domain name copied to clipboard!");
    });
  };

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapUrl}${suggestedName}`}
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
        <p className="char-count">{`Length: ${suggestedName.length} characters`}</p>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </a>
  );
};

export default NameCard;
