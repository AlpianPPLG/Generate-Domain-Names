import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({
  suggestedNames,
  favorites,
  toggleFavorite,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const suggestedNamesJsx =
    suggestedNames.length > 0 ? (
      <>
        <p className="results-title">Your Domain Name Recommendations:</p>
        {suggestedNames.map((suggestedName) => {
          return (
            <NameCard
              key={suggestedName}
              suggestedName={suggestedName}
              isFavorite={favorites.includes(suggestedName)}
              toggleFavorite={toggleFavorite}
            />
          );
        })}

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </>
    ) : (
      <p className="results-title">No domain names found.</p>
    );

  return <div className="results-container">{suggestedNamesJsx}</div>;
};

export default ResultContainer;
